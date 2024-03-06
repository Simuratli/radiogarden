import "./styles/global.scss";
import { Earth, Loader, Circle } from "./components";
import { Player } from "./containers";
import { useStore } from "./store";
import { useStation } from "./hooks/useStation";

function App() {
  useStation();
  const { mainLoading } = useStore();

  return (
    <div className="App">
      <div>
        <Circle />
        {mainLoading && <Loader />}
        <Earth />
        <Player />
      </div>
    </div>
  );
}

export default App;
