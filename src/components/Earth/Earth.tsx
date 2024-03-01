import { useMapGl } from "../../hooks/useMapGl";

function Earth() {
  const { mapContainer } = useMapGl();

  return <div ref={mapContainer} className="map-container" id="map" />;
}

export default Earth;
