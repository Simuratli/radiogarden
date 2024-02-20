import { useMapGl } from "../../hooks/useMapGl";

function Earth() {
  const { mapContainer } = useMapGl();

  return <div ref={mapContainer} className="map-container" />;
}

export default Earth;
