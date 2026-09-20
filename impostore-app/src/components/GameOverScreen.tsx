import clsx from "clsx";
import { useGameStore } from "../state/gameStore";
import { PlayerAvatar } from "./PlayerAvatar";

export function GameOverScreen() {
  const winner = useGameStore((s) => s.winner);
  const players = useGameStore((s) => s.players);
  const secretWord = useGameStore((s) => s.secretWord);
  const resetGame = useGameStore((s) => s.resetGame);
  const humanPlayer = players.find((p) => p.isHuman)!;

  const humanWon =
    (winner === "crew" && humanPlayer.role === "crew") ||
    (winner === "impostors" && humanPlayer.role === "impostor");

  return (
    <div className="min-h-svh flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg text-center">
        <span className="text-6xl block mb-4">{winner === "crew" ? "🛡️" : "🕵️"}</span>
        <h1
          className={clsx(
            "text-3xl md:text-4xl font-extrabold mb-2 text-shadow-glow",
            winner === "crew" ? "text-crew" : "text-impostor",
          )}
        >
          {winner === "crew" ? "VINCONO GLI STANDARD" : "VINCONO GLI IMPOSTORI"}
        </h1>
        <p className={clsx("text-lg font-semibold mb-6", humanWon ? "text-gold" : "text-muted")}>
          {humanWon ? "Hai vinto! 🎉" : "Hai perso questa partita."}
        </p>

        <div className="bg-panel border border-line rounded-2xl p-5 mb-6">
          <p className="text-muted text-xs uppercase tracking-widest mb-3">La parola era</p>
          <p className="text-2xl font-bold text-ink mb-5">{secretWord}</p>

          <p className="text-muted text-xs uppercase tracking-widest mb-3">Ruoli</p>
          <div className="grid grid-cols-4 gap-4">
            {players.map((p) => (
              <div key={p.id} className="flex flex-col items-center gap-1">
                <PlayerAvatar player={p} size="sm" />
                <span className="text-xs text-ink">{p.name}</span>
                <span
                  className={clsx(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full",
                    p.role === "impostor" ? "bg-impostor-dim text-impostor" : "bg-crew-dim text-crew",
                  )}
                >
                  {p.role === "impostor" ? "IMPOSTORE" : "STANDARD"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={resetGame}
          className="px-8 py-3 rounded-xl font-bold text-lg bg-impostor text-white hover:brightness-110 transition"
        >
          Nuova partita
        </button>
      </div>
    </div>
  );
}
