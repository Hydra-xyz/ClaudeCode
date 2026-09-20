import clsx from "clsx";
import type { Player } from "../types/game";

interface Props {
  player: Player;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  ring?: "none" | "active" | "eliminated";
  className?: string;
}

const sizeClasses = {
  sm: "w-9 h-9 text-lg",
  md: "w-12 h-12 text-2xl",
  lg: "w-20 h-20 text-4xl",
};

export function PlayerAvatar({ player, size = "md", showName = false, ring = "none", className }: Props) {
  return (
    <div className={clsx("flex flex-col items-center gap-1.5", className)}>
      <div
        className={clsx(
          "flex items-center justify-center rounded-full shrink-0 transition-all",
          sizeClasses[size],
          player.colorClass,
          !player.alive && "grayscale opacity-40",
          ring === "active" && "ring-4 ring-gold shadow-[0_0_20px_rgba(255,184,77,0.5)]",
          ring === "eliminated" && "ring-4 ring-impostor",
        )}
      >
        <span className="drop-shadow">{player.avatarEmoji}</span>
      </div>
      {showName && (
        <span className={clsx("text-xs font-medium", player.alive ? "text-ink" : "text-muted line-through")}>
          {player.name}
        </span>
      )}
    </div>
  );
}
