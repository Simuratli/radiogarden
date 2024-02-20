import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useStore } from "../store";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2ltdXJhdGxpIiwiYSI6ImNsc3N5Z283NTBtMnAya211eDV5NXA2MWYifQ.Ezm-c5DtNWk3oWiW-z-Tgg";

export function useMapGl() {
  const { stations } = useStore();
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (stations.length !== 0) {
      for (const marker of stations) {
        // Create a DOM element for each marker.
        const el = document.createElement("div");
        el.classList.add("marker");
        el.className = "marker";

        el.addEventListener("click", () => {
          window.alert(marker.country);
        });

        // Add markers to the map.
        new mapboxgl.Marker(el).setLngLat(marker.geo).addTo(map.current);
      }
    }
  }, [stations]);

  return { mapContainer, map };
}
