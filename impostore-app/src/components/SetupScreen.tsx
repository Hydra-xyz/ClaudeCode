import { useState } from "react";
import clsx from "clsx";
import { useGameStore } from "../state/gameStore";
import { WORD_CATEGORIES } from "../data/words";
import { testApiKey } from "../lib/anthropic";

export function SetupScreen() {
  const apiKey = useGameStore((s) => s.apiKey);
  const setApiKey = useGameStore((s) => s.setApiKey);
  const startGame = useGameStore((s) => s.startGame);

  const [keyInput, setKeyInput] = useState(apiKey);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);
  const [keyStatus, setKeyStatus] = useState<"idle" | "ok" | "bad">(apiKey ? "ok" : "idle");

  async function handleVerify() {
    if (!keyInput.trim()) return;
    setChecking(true);
    const ok = await testApiKey(keyInput.trim());
    setKeyStatus(ok ? "ok" : "bad");
    setChecking(false);
    if (ok) setApiKey(keyInput.trim());
  }

  function handleStart() {
    if (keyStatus !== "ok") return;
    startGame(categoryId);
  }

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
            <label className="block text-sm font-semibold text-ink mb-2">
              Chiave API Anthropic
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value={keyInput}
                onChange={(e) => {
                  setKeyInput(e.target.value);
                  setKeyStatus("idle");
                }}
                placeholder="sk-ant-..."
                className="flex-1 bg-panel-2 border border-line rounded-lg px-3 py-2 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-crew"
              />
              <button
                onClick={handleVerify}
                disabled={checking || !keyInput.trim()}
                className="px-4 py-2 rounded-lg bg-panel-2 border border-line text-sm font-medium hover:border-crew disabled:opacity-50 transition"
              >
                {checking ? "..." : "Verifica"}
              </button>
            </div>
            {keyStatus === "ok" && (
              <p className="text-crew text-xs mt-2">✓ Chiave valida, salvata solo su questo browser.</p>
            )}
            {keyStatus === "bad" && (
              <p className="text-impostor text-xs mt-2">✗ Chiave non valida o errore di rete.</p>
            )}
            {keyStatus === "idle" && (
              <p className="text-muted text-xs mt-2">
                Usata solo dal tuo browser per far parlare i bot. Non viene inviata altrove.
              </p>
            )}
          </div>

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
            onClick={handleStart}
            disabled={keyStatus !== "ok"}
            className={clsx(
              "w-full py-3 rounded-xl font-bold text-lg transition",
              keyStatus === "ok"
                ? "bg-impostor text-white hover:brightness-110 shadow-[0_0_25px_rgba(255,77,109,0.4)]"
                : "bg-panel-2 text-muted cursor-not-allowed",
            )}
          >
            Inizia partita
          </button>
        </div>

        <p className="text-center text-muted text-xs mt-6">
          Tu contro 7 bot IA · 6 standard, 2 impostori
        </p>
      </div>
    </div>
  );
}
