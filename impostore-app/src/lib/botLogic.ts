import type { WordCategory, WordEntry } from "../data/words";

export function pickCrewClue(wordEntry: WordEntry, usedTexts: string[]): string {
  const unused = wordEntry.clues.filter((c) => !usedTexts.includes(c));
  const pool = unused.length > 0 ? unused : wordEntry.clues;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function pickImpostorClue(
  category: WordCategory,
  secretWord: string,
  usedTexts: string[],
): string {
  const otherWordsClues = category.words
    .filter((w) => w.word !== secretWord)
    .flatMap((w) => w.clues);
  const unused = otherWordsClues.filter((c) => !usedTexts.includes(c));
  const pool = unused.length > 0 ? unused : otherWordsClues;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function pickBotVoteTarget(candidateIds: string[]): string {
  return candidateIds[Math.floor(Math.random() * candidateIds.length)];
}

const VOTE_REASONS = [
  "Il suo indizio mi è sembrato fuori tema.",
  "Non sapeva abbastanza dettagli, secondo me.",
  "Ha esitato troppo prima di rispondere.",
  "Il suo indizio era troppo generico.",
  "Qualcosa nel suo modo di parlare non mi ha convinto.",
  "Ha detto qualcosa che non c'entrava molto.",
  "Mi è sembrato in difficoltà a spiegarsi.",
  "Il suo indizio poteva andare bene per troppe cose diverse.",
];

export function pickVoteReason(): string {
  return VOTE_REASONS[Math.floor(Math.random() * VOTE_REASONS.length)];
}
