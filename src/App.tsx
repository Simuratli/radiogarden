import "./styles/global.scss";
import { Earth } from "./components";
import { Player } from "./containers";
import { useStore } from "./store";
import { useEffect } from "react";

function App() {
  const { getStations } = useStore();

  useEffect(() => {
    getStations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div>
        <Earth />
        <Player />
      </div>
    </div>
  );
}

export default App;
