import { useGameStore } from "./state/gameStore";
import { SetupScreen } from "./components/SetupScreen";
import { RevealScreen } from "./components/RevealScreen";
import { CluesScreen } from "./components/CluesScreen";
import { VotingScreen } from "./components/VotingScreen";
import { RoundResultsScreen } from "./components/RoundResultsScreen";
import { GameOverScreen } from "./components/GameOverScreen";

function App() {
  const phase = useGameStore((s) => s.phase);

  switch (phase) {
    case "setup":
      return <SetupScreen />;
    case "reveal":
      return <RevealScreen />;
    case "clues":
      return <CluesScreen />;
    case "voting":
      return <VotingScreen />;
    case "roundResults":
      return <RoundResultsScreen />;
    case "gameOver":
      return <GameOverScreen />;
    default:
      return null;
  }
}

export default App;
