import { useState } from "react";
import clsx from "clsx";
import { useGameStore } from "../state/gameStore";

export function RevealScreen() {
  const players = useGameStore((s) => s.players);
  const humanPlayer = players.find((p) => p.isHuman)!;
  const category = useGameStore((s) => s.category);
  const secretWord = useGameStore((s) => s.secretWord);
  const beginCluePhase = useGameStore((s) => s.beginCluePhase);
  const [revealed, setRevealed] = useState(false);

  const isImpostor = humanPlayer.role === "impostor";

  return (
    <div className="min-h-svh flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md text-center">
        <p className="text-muted text-sm mb-6 uppercase tracking-widest">Il tuo ruolo</p>

        <div
          className="relative mx-auto mb-8 [perspective:1200px] cursor-pointer"
          onClick={() => setRevealed(true)}
        >
          <div
            className={clsx(
              "relative w-64 h-80 mx-auto transition-transform duration-700 [transform-style:preserve-3d]",
              revealed && "[transform:rotateY(180deg)]",
            )}
          >
            {/* Back of card (hidden state) */}
            <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-panel border-2 border-line flex flex-col items-center justify-center gap-3 shadow-xl">
              <span className="text-6xl">🎭</span>
              <p className="text-muted text-sm">Tocca per rivelare</p>
            </div>

            {/* Front of card (revealed state) */}
            <div
              className={clsx(
                "absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border-2 flex flex-col items-center justify-center gap-4 p-6 shadow-xl",
                isImpostor ? "bg-impostor-dim border-impostor" : "bg-crew-dim border-crew",
              )}
            >
              <span className="text-5xl">{isImpostor ? "🕵️" : "✅"}</span>
              <h2 className={clsx("text-2xl font-extrabold", isImpostor ? "text-impostor" : "text-crew")}>
                {isImpostor ? "SEI L'IMPOSTORE" : "SEI STANDARD"}
              </h2>
              {isImpostor ? (
                <p className="text-ink text-sm">
                  Non conosci la parola segreta. Categoria:{" "}
                  <span className="font-semibold">
                    {category?.emoji} {category?.label}
                  </span>
                  <br />
                  Ascolta gli altri e improvvisa senza farti scoprire.
                </p>
              ) : (
                <>
                  <p className="text-muted text-xs uppercase tracking-wide">Parola segreta</p>
                  <p className="text-3xl font-bold text-ink">{secretWord}</p>
                  <p className="text-muted text-xs">
                    Categoria: {category?.emoji} {category?.label}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={beginCluePhase}
          disabled={!revealed}
          className={clsx(
            "px-8 py-3 rounded-xl font-bold text-lg transition",
            revealed
              ? "bg-gold text-black hover:brightness-110"
              : "bg-panel-2 text-muted cursor-not-allowed",
          )}
        >
          Ho capito, si comincia
        </button>
      </div>
    </div>
  );
}
