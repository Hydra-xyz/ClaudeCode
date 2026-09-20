import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useGameStore } from "../state/gameStore";
import { PlayerAvatar } from "./PlayerAvatar";

export function CluesScreen() {
  const round = useGameStore((s) => s.round);
  const players = useGameStore((s) => s.players);
  const turnOrder = useGameStore((s) => s.turnOrder);
  const currentTurnIndex = useGameStore((s) => s.currentTurnIndex);
  const allClues = useGameStore((s) => s.clues);
  const clues = allClues.filter((c) => c.round === round);
  const currentPlayer = players.find((p) => p.id === turnOrder[currentTurnIndex]) ?? null;
  const isBotThinking = useGameStore((s) => s.isBotThinking);
  const advanceCluePhase = useGameStore((s) => s.advanceCluePhase);
  const submitHumanClue = useGameStore((s) => s.submitHumanClue);
  const humanPlayer = players.find((p) => p.isHuman)!;
  const secretWord = useGameStore((s) => s.secretWord);
  const category = useGameStore((s) => s.category);

  const [inputText, setInputText] = useState("");
  const running = useRef(false);

  useEffect(() => {
    if (currentPlayer?.isHuman) return;
    if (running.current) return;
    running.current = true;
    advanceCluePhase().finally(() => {
      running.current = false;
    });
  }, [currentTurnIndex, currentPlayer, advanceCluePhase]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!inputText.trim()) return;
    submitHumanClue(inputText);
    setInputText("");
  }

  const isHumanImpostor = humanPlayer.role === "impostor";

  return (
    <div className="min-h-svh flex flex-col px-4 py-6 max-w-2xl mx-auto w-full">
      <header className="text-center mb-4">
        <p className="text-muted text-xs uppercase tracking-widest">Round {round} · Turno degli indizi</p>
        <h1 className="text-xl font-bold text-ink mt-1">
          {category?.emoji} {category?.label}
          {!isHumanImpostor && <span className="text-crew"> · "{secretWord}"</span>}
        </h1>
      </header>

      <div className="flex gap-2 justify-center flex-wrap mb-6">
        {turnOrder.map((id, idx) => {
          const p = players.find((pl) => pl.id === id)!;
          return (
            <PlayerAvatar
              key={id}
              player={p}
              size="sm"
              ring={idx === currentTurnIndex ? "active" : "none"}
            />
          );
        })}
      </div>

      <div className="flex-1 bg-panel border border-line rounded-2xl p-4 space-y-3 overflow-y-auto min-h-[240px]">
        {clues.length === 0 && (
          <p className="text-muted text-center text-sm py-8">In attesa del primo indizio...</p>
        )}
        {clues.map((c, i) => {
          const p = players.find((pl) => pl.id === c.playerId)!;
          return (
            <div key={i} className="flex items-start gap-3">
              <PlayerAvatar player={p} size="sm" />
              <div className="bg-panel-2 rounded-xl rounded-tl-none px-4 py-2 text-ink text-sm">
                <span className="font-semibold text-muted mr-1">{p.name}:</span>
                {c.text}
              </div>
            </div>
          );
        })}
        {isBotThinking && (
          <div className="flex items-center gap-2 text-muted text-sm pl-1">
            <span className="animate-pulse">💭 {currentPlayer?.name} sta pensando...</span>
          </div>
        )}
      </div>

      <div className="mt-4">
        {currentPlayer?.isHuman ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              autoFocus
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isHumanImpostor ? "Improvvisa un indizio plausibile..." : "Scrivi il tuo indizio..."}
              className="flex-1 bg-panel-2 border border-line rounded-xl px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-gold text-black font-bold hover:brightness-110 transition"
            >
              Invia
            </button>
          </form>
        ) : (
          <div
            className={clsx(
              "text-center text-sm py-3 rounded-xl border border-dashed border-line text-muted",
            )}
          >
            Tocca a {currentPlayer?.name}...
          </div>
        )}
      </div>
    </div>
  );
}
