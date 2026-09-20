export interface BotIdentity {
  name: string;
  avatarEmoji: string;
  colorClass: string;
}

// Pool of 7 bot identities (game always uses 1 human + 7 bots).
export const BOT_IDENTITIES: BotIdentity[] = [
  { name: "Giulia", avatarEmoji: "🦊", colorClass: "bg-orange-500" },
  { name: "Marco", avatarEmoji: "🐺", colorClass: "bg-slate-500" },
  { name: "Sara", avatarEmoji: "🐙", colorClass: "bg-purple-500" },
  { name: "Luca", avatarEmoji: "🐸", colorClass: "bg-green-500" },
  { name: "Elena", avatarEmoji: "🦉", colorClass: "bg-amber-500" },
  { name: "Davide", avatarEmoji: "🐢", colorClass: "bg-teal-500" },
  { name: "Chiara", avatarEmoji: "🦋", colorClass: "bg-pink-500" },
];

export const HUMAN_IDENTITY: BotIdentity = {
  name: "Tu",
  avatarEmoji: "🎭",
  colorClass: "bg-indigo-500",
};
