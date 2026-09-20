export type Role = "crew" | "impostor";

export interface Player {
  id: string;
  name: string;
  avatarEmoji: string;
  colorClass: string;
  isHuman: boolean;
  role: Role;
  alive: boolean;
}

export type GamePhase =
  | "setup"
  | "reveal"
  | "clues"
  | "voting"
  | "roundResults"
  | "gameOver";

export interface ClueEntry {
  round: number;
  playerId: string;
  text: string;
}

export interface VoteEntry {
  round: number;
  voterId: string;
  targetId: string;
  reason?: string;
}

export interface RoundResult {
  round: number;
  eliminatedId: string | null;
  wasImpostor: boolean | null;
  voteTally: Record<string, number>;
}

export type Winner = "crew" | "impostors" | null;
