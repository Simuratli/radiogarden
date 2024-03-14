import React, { useEffect } from "react";
import { useStore } from "../store";
import { useMapGl } from "../hooks/useMapGl";

export function useStation() {
  const {
    getStations,
    getCurrentLocation,
    currentLocation,
    setMainLoading,
    selectStation,
    stations,
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
    if (currentLocation?.lat || currentLocation?.lat) {
      map.current?.flyTo({
        center: [currentLocation.lon, currentLocation.lat],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        duration: 1200,
      });
      const res = stations.filter(
        (stat) => stat.country === currentLocation.country,
      );
      selectStation(res[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return {};
}
