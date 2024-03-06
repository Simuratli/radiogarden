import "./styles/global.scss";
import { Earth, Loader } from "./components";
import { Player } from "./containers";
import { useStore } from "./store";
import { useEffect } from "react";
import { useMapGl } from "./hooks/useMapGl";
function App() {
  const {
    getStations,
    getCurrentLocation,
    currentLocation,
    mainLoading,
    setMainLoading,
  } = useStore();
  const { map } = useMapGl();

  useEffect(() => {
    getStations();
    getCurrentLocation();
    setTimeout(() => {
      setMainLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentLocation) {
      console.log(currentLocation);
      map.current?.flyTo({
        center: [currentLocation.lon, currentLocation.lat],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        duration: 1200,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return (
    <div className="App">
      <div>
        {mainLoading && <Loader />}
        <Earth />
        <Player />
      </div>
    </div>
  );
}

export default App;
