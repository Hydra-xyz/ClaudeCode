import { useEffect, useRef } from "react";
import clsx from "clsx";
import { useGameStore, HUMAN_ID } from "../state/gameStore";
import { PlayerAvatar } from "./PlayerAvatar";

export function VotingScreen() {
  const round = useGameStore((s) => s.round);
  const players = useGameStore((s) => s.players);
  const allClues = useGameStore((s) => s.clues);
  const allVotes = useGameStore((s) => s.votes);
  const clues = allClues.filter((c) => c.round === round);
  const votes = allVotes.filter((v) => v.round === round);
  const isBotThinking = useGameStore((s) => s.isBotThinking);
  const error = useGameStore((s) => s.error);
  const runNextBotVote = useGameStore((s) => s.runNextBotVote);
  const submitHumanVote = useGameStore((s) => s.submitHumanVote);

  const alive = players.filter((p) => p.alive);
  const humanPlayer = players.find((p) => p.isHuman)!;
  const humanVoted = !humanPlayer.alive || votes.some((v) => v.voterId === HUMAN_ID);
  const inFlight = useRef(false);

  useEffect(() => {
    const pendingBots = alive.filter(
      (p) => !p.isHuman && !votes.some((v) => v.voterId === p.id),
    );
    if (pendingBots.length === 0 || inFlight.current) return;
    inFlight.current = true;
    runNextBotVote().finally(() => {
      inFlight.current = false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [votes.length, alive.length]);

  const candidates = alive.filter((p) => p.id !== HUMAN_ID);

  return (
    <div className="min-h-svh flex flex-col px-4 py-6 max-w-2xl mx-auto w-full">
      <header className="text-center mb-4">
        <p className="text-muted text-xs uppercase tracking-widest">Round {round} · Votazione</p>
        <h1 className="text-xl font-bold text-ink mt-1">Chi è l'impostore secondo te?</h1>
      </header>

      <div className="bg-panel border border-line rounded-2xl p-4 space-y-2 mb-6 max-h-48 overflow-y-auto">
        {clues.map((c, i) => {
          const p = players.find((pl) => pl.id === c.playerId)!;
          return (
            <p key={i} className="text-sm text-ink">
              <span className="font-semibold text-muted">{p.name}:</span> {c.text}
            </p>
          );
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {candidates.map((p) => {
          const hasVotedForThem = votes.some((v) => v.targetId === p.id);
          return (
            <button
              key={p.id}
              disabled={humanVoted}
              onClick={() => submitHumanVote(p.id)}
              className={clsx(
                "flex flex-col items-center gap-2 p-4 rounded-xl border transition",
                humanVoted
                  ? "border-line bg-panel-2 opacity-70 cursor-not-allowed"
                  : "border-line bg-panel-2 hover:border-impostor hover:bg-impostor-dim/40 cursor-pointer",
              )}
            >
              <PlayerAvatar player={p} size="md" />
              <span className="text-sm font-medium text-ink">{p.name}</span>
              {hasVotedForThem && (
                <span className="text-xs text-gold">🗳️ ha ricevuto un voto</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-center space-y-2">
        {isBotThinking && (
          <p className="text-muted text-sm animate-pulse">💭 qualcuno sta ancora decidendo...</p>
        )}
        {!humanPlayer.alive && (
          <p className="text-muted text-sm">Sei stato eliminato: ora puoi solo osservare.</p>
        )}
        {humanPlayer.alive && humanVoted && (
          <p className="text-crew text-sm">
            Hai votato. In attesa degli altri ({votes.length}/{alive.length})...
          </p>
        )}
        {humanPlayer.alive && !humanVoted && (
          <p className="text-muted text-sm">Scegli chi sospetti (non puoi votare te stesso).</p>
        )}
        {error && <p className="text-impostor text-sm">{error}</p>}
      </div>
    </div>
  );
}
