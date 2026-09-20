import { useState } from "react";
import clsx from "clsx";
import { useGameStore } from "../state/gameStore";
import { WORD_CATEGORIES } from "../data/words";

export function SetupScreen() {
  const startGame = useGameStore((s) => s.startGame);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  return (
    <div className="min-h-svh flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-impostor mb-3">
            <span className="text-5xl">🎭</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-impostor text-shadow-glow">
            IMPOSTORE
          </h1>
          <p className="text-muted mt-2">
            8 giocatori. 6 sanno la parola. 2 fingono di saperla. Chi si tradirà?
          </p>
        </div>

        <div className="bg-panel border border-line rounded-2xl p-6 space-y-6 shadow-2xl">
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">Categoria (opzionale)</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setCategoryId(null)}
                className={clsx(
                  "text-left px-3 py-2 rounded-lg border text-sm transition",
                  categoryId === null
                    ? "border-crew bg-crew-dim text-ink"
                    : "border-line bg-panel-2 text-muted hover:border-crew/50",
                )}
              >
                🎲 Casuale
              </button>
              {WORD_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategoryId(c.id)}
                  className={clsx(
                    "text-left px-3 py-2 rounded-lg border text-sm transition",
                    categoryId === c.id
                      ? "border-crew bg-crew-dim text-ink"
                      : "border-line bg-panel-2 text-muted hover:border-crew/50",
                  )}
                >
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => startGame(categoryId)}
            className="w-full py-3 rounded-xl font-bold text-lg bg-impostor text-white hover:brightness-110 shadow-[0_0_25px_rgba(255,77,109,0.4)] transition"
          >
            Inizia partita
          </button>
        </div>

        <p className="text-center text-muted text-xs mt-6">
          Tu contro 7 bot · 6 standard, 2 impostori · funziona offline, nessuna chiave richiesta
        </p>
      </div>
    </div>
  );
}
