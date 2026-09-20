import clsx from "clsx";
import { useGameStore } from "../state/gameStore";
import { PlayerAvatar } from "./PlayerAvatar";

export function RoundResultsScreen() {
  const roundResults = useGameStore((s) => s.roundResults);
  const players = useGameStore((s) => s.players);
  const votes = useGameStore((s) => s.votes);
  const startNextRound = useGameStore((s) => s.startNextRound);

  const last = roundResults[roundResults.length - 1];
  const eliminated = last.eliminatedId ? players.find((p) => p.id === last.eliminatedId) : null;
  const reasons = votes.filter((v) => v.round === last.round && v.targetId === last.eliminatedId && v.reason);

  return (
    <div className="min-h-svh flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md text-center">
        <p className="text-muted text-xs uppercase tracking-widest mb-4">Esito round {last.round}</p>

        {eliminated ? (
          <>
            <PlayerAvatar player={eliminated} size="lg" ring="eliminated" className="mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-ink mb-2">
              Eliminato: {eliminated.isHuman ? "tu" : eliminated.name}
            </h2>
            <div
              className={clsx(
                "inline-block px-4 py-2 rounded-full font-bold mb-4",
                last.wasImpostor ? "bg-crew-dim text-crew" : "bg-impostor-dim text-impostor",
              )}
            >
              {last.wasImpostor ? "Era un impostore! 🎉" : "Era standard... 😬"}
            </div>
          </>
        ) : (
          <>
            <span className="text-5xl block mb-4">🤝</span>
            <h2 className="text-2xl font-extrabold text-ink mb-4">Parità di voti, nessuna eliminazione</h2>
          </>
        )}

        {reasons.length > 0 && (
          <div className="bg-panel border border-line rounded-xl p-4 text-left space-y-1 mb-6">
            {reasons.map((r, i) => (
              <p key={i} className="text-sm text-muted italic">"{r.reason}"</p>
            ))}
          </div>
        )}

        <button
          onClick={startNextRound}
          className="px-8 py-3 rounded-xl font-bold text-lg bg-gold text-black hover:brightness-110 transition"
        >
          Round successivo
        </button>
      </div>
    </div>
  );
}
