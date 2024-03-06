import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useStore } from "../store";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2ltdXJhdGxpIiwiYSI6ImNsc3N5Z283NTBtMnAya211eDV5NXA2MWYifQ.Ezm-c5DtNWk3oWiW-z-Tgg";

export function useMapGl() {
  const { stations, selectStation } = useStore();
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng] = useState(0);
  const [lat] = useState(0);
  const [zoom] = useState(1);

  function calculateDistance(point1: any, point2: any) {
    // Calculate the distance between two points using Haversine formula
    const [lng1, lat1] = point1;
    const [lng2, lat2] = point2;
    const R = 6371e3; // Earth radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance;
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current ? mapContainer.current : "map", // Use the current of the ref
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("style.load", () => {
      // Custom atmosphere styling
      map.current.setFog({});

      map.current.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.terrain-rgb",
      });

      map.current.setTerrain({
        source: "mapbox-dem",
        exaggeration: 1.5,
      });
    });
  });

  useEffect(() => {
    if (stations.length !== 0) {
      for (const marker of stations) {
        // Create a DOM element for each marker.
        const el = document.createElement("div");
        el.classList.add("marker");
        el.id = marker.id;

        el.addEventListener("click", (e) => {
          const markers = document.querySelectorAll(".marker");
          markers.forEach((marker) => {
            marker.classList.remove("whiteMarker");
          });

          el.classList.add("whiteMarker");
          selectStation(marker);
          map.current.flyTo({
            center: marker.geo,
            essential: true,
            duration: 1200,
          });
        });
        // Add markers to the map.

        new mapboxgl.Marker(el).setLngLat(marker.geo).addTo(map.current);
      }
    }
  }, [stations, selectStation]);

  return { mapContainer, map };
}
