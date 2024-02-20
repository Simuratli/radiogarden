import "./App.css";
import { Earth } from "./components";
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
      </div>
    </div>
  );
}

export default App;
