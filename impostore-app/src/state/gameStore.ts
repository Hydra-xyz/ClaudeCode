import { create } from "zustand";
import type {
  ClueEntry,
  GamePhase,
  Player,
  RoundResult,
  VoteEntry,
  Winner,
} from "../types/game";
import { BOT_IDENTITIES, HUMAN_IDENTITY } from "../data/bots";
import { pickRandomWord, WORD_CATEGORIES, type WordCategory, type WordEntry } from "../data/words";
import { pickBotVoteTarget, pickCrewClue, pickImpostorClue, pickVoteReason } from "../lib/botLogic";

const HUMAN_ID = "player-human";
const TOTAL_PLAYERS = 8;
const IMPOSTOR_COUNT = 2;

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createPlayers(): Player[] {
  const roles = shuffle([
    ...Array(IMPOSTOR_COUNT).fill("impostor"),
    ...Array(TOTAL_PLAYERS - IMPOSTOR_COUNT).fill("crew"),
  ] as const);

  const human: Player = {
    id: HUMAN_ID,
    name: HUMAN_IDENTITY.name,
    avatarEmoji: HUMAN_IDENTITY.avatarEmoji,
    colorClass: HUMAN_IDENTITY.colorClass,
    isHuman: true,
    role: roles[0],
    alive: true,
  };

  const bots: Player[] = BOT_IDENTITIES.map((identity, i) => ({
    id: `player-bot-${i}`,
    name: identity.name,
    avatarEmoji: identity.avatarEmoji,
    colorClass: identity.colorClass,
    isHuman: false,
    role: roles[i + 1],
    alive: true,
  }));

  return [human, ...bots];
}

function computeTurnOrder(players: Player[]): string[] {
  const alive = players.filter((p) => p.alive);
  const order = shuffle(alive.map((p) => p.id));
  const idToPlayer = new Map(alive.map((p) => [p.id, p]));
  if (idToPlayer.get(order[0])?.role === "impostor") {
    const nonImpostorIdx = order.findIndex((id) => idToPlayer.get(id)?.role !== "impostor");
    if (nonImpostorIdx > 0) {
      [order[0], order[nonImpostorIdx]] = [order[nonImpostorIdx], order[0]];
    }
  }
  return order;
}

interface GameState {
  phase: GamePhase;
  players: Player[];
  category: WordCategory | null;
  secretWord: string | null;
  secretEntry: WordEntry | null;
  round: number;
  turnOrder: string[];
  currentTurnIndex: number;
  clues: ClueEntry[];
  votes: VoteEntry[];
  roundResults: RoundResult[];
  winner: Winner;
  isBotThinking: boolean;

  startGame: (categoryId: string | null) => void;
  beginCluePhase: () => void;
  submitHumanClue: (text: string) => void;
  advanceCluePhase: () => Promise<void>;
  submitHumanVote: (targetId: string) => void;
  runBotVotesUntilDone: () => Promise<void>;
  tallyVotesIfReady: () => void;
  startNextRound: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  phase: "setup",
  players: [],
  category: null,
  secretWord: null,
  secretEntry: null,
  round: 0,
  turnOrder: [],
  currentTurnIndex: 0,
  clues: [],
  votes: [],
  roundResults: [],
  winner: null,
  isBotThinking: false,

  startGame: (categoryId) => {
    const players = createPlayers();
    const { category, entry } = pickRandomWord(categoryId);
    set({
      players,
      category,
      secretWord: entry.word,
      secretEntry: entry,
      phase: "reveal",
      round: 1,
      clues: [],
      votes: [],
      roundResults: [],
      winner: null,
      turnOrder: [],
      currentTurnIndex: 0,
    });
  },

  beginCluePhase: () => {
    const { players } = get();
    set({
      turnOrder: computeTurnOrder(players),
      currentTurnIndex: 0,
      phase: "clues",
    });
  },

  submitHumanClue: (text) => {
    const { round, turnOrder, currentTurnIndex, clues } = get();
    const playerId = turnOrder[currentTurnIndex];
    const trimmed = text.trim();
    if (!trimmed) return;
    set({
      clues: [...clues, { round, playerId, text: trimmed }],
      currentTurnIndex: currentTurnIndex + 1,
    });
    if (currentTurnIndex + 1 >= turnOrder.length) {
      set({ phase: "voting", votes: [] });
    }
  },

  // Processes consecutive bot turns in one continuous async loop (rather than
  // being re-triggered per turn by a React effect) so that the synchronous
  // state updates below can't cause a reentrant call to race past the guard
  // that callers use to avoid overlapping invocations.
  advanceCluePhase: async () => {
    for (;;) {
      const state = get();
      if (state.phase !== "clues") return;
      const { round, turnOrder, currentTurnIndex, players, category, secretEntry, clues } = state;
      if (currentTurnIndex >= turnOrder.length) return;
      const playerId = turnOrder[currentTurnIndex];
      const player = players.find((p) => p.id === playerId);
      if (!player || player.isHuman || !category || !secretEntry) return;

      set({ isBotThinking: true });
      await wait(450 + Math.random() * 650);

      const usedTexts = clues.filter((c) => c.round === round).map((c) => c.text);
      const text =
        player.role === "crew"
          ? pickCrewClue(secretEntry, usedTexts)
          : pickImpostorClue(category, secretEntry.word, usedTexts);

      const latest = get();
      const nextIndex = latest.currentTurnIndex + 1;
      set({
        clues: [...latest.clues, { round, playerId, text }],
        currentTurnIndex: nextIndex,
        isBotThinking: false,
        phase: nextIndex >= latest.turnOrder.length ? "voting" : latest.phase,
        votes: nextIndex >= latest.turnOrder.length ? [] : latest.votes,
      });
    }
  },

  submitHumanVote: (targetId) => {
    const { round, votes } = get();
    if (votes.some((v) => v.voterId === HUMAN_ID && v.round === round)) return;
    set({ votes: [...votes, { round, voterId: HUMAN_ID, targetId }] });
    get().tallyVotesIfReady();
  },

  // Same reasoning as advanceCluePhase: one continuous loop over all pending
  // bot votes, called once per voting phase, instead of being re-triggered
  // per vote from a React effect.
  runBotVotesUntilDone: async () => {
    for (;;) {
      const state = get();
      if (state.phase !== "voting") return;
      const { round, players, votes } = state;
      const alive = players.filter((p) => p.alive);
      const nextBot = alive.find(
        (p) => !p.isHuman && !votes.some((v) => v.voterId === p.id && v.round === round),
      );
      if (!nextBot) return;

      set({ isBotThinking: true });
      await wait(350 + Math.random() * 550);

      const candidates = alive.filter((p) => p.id !== nextBot.id);
      const targetId = pickBotVoteTarget(candidates.map((p) => p.id));
      const reason = pickVoteReason();

      const latest = get();
      set({
        votes: [...latest.votes, { round, voterId: nextBot.id, targetId, reason }],
        isBotThinking: false,
      });
      get().tallyVotesIfReady();
    }
  },

  tallyVotesIfReady: () => {
    const { round, votes, players } = get();
    const alive = players.filter((p) => p.alive);
    const roundVotes = votes.filter((v) => v.round === round);
    if (roundVotes.length < alive.length) return;

    const tally: Record<string, number> = {};
    for (const v of roundVotes) {
      tally[v.targetId] = (tally[v.targetId] ?? 0) + 1;
    }
    let eliminatedId: string | null = null;
    let maxVotes = 0;
    let tie = false;
    for (const [id, count] of Object.entries(tally)) {
      if (count > maxVotes) {
        maxVotes = count;
        eliminatedId = id;
        tie = false;
      } else if (count === maxVotes) {
        tie = true;
      }
    }
    if (tie) eliminatedId = null;

    const updatedPlayers = players.map((p) =>
      p.id === eliminatedId ? { ...p, alive: false } : p,
    );
    const eliminatedPlayer = players.find((p) => p.id === eliminatedId) ?? null;

    const result: RoundResult = {
      round,
      eliminatedId,
      wasImpostor: eliminatedPlayer ? eliminatedPlayer.role === "impostor" : null,
      voteTally: tally,
    };

    const aliveAfter = updatedPlayers.filter((p) => p.alive);
    const impostorsAlive = aliveAfter.filter((p) => p.role === "impostor").length;
    const crewAlive = aliveAfter.filter((p) => p.role === "crew").length;

    let winner: Winner = null;
    if (impostorsAlive === 0) winner = "crew";
    else if (impostorsAlive >= crewAlive) winner = "impostors";

    set({
      players: updatedPlayers,
      roundResults: [...get().roundResults, result],
      phase: winner ? "gameOver" : "roundResults",
      winner,
    });
  },

  startNextRound: () => {
    const { round } = get();
    set({
      round: round + 1,
      turnOrder: computeTurnOrder(get().players),
      currentTurnIndex: 0,
      votes: [],
      phase: "clues",
    });
  },

  resetGame: () => {
    set({
      phase: "setup",
      players: [],
      category: null,
      secretWord: null,
      secretEntry: null,
      round: 0,
      turnOrder: [],
      currentTurnIndex: 0,
      clues: [],
      votes: [],
      roundResults: [],
      winner: null,
      isBotThinking: false,
    });
  },
}));

export { HUMAN_ID, WORD_CATEGORIES };
