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

  // function calculateDistance(point1: any, point2: any) {
  //   // Calculate the distance between two points using Haversine formula
  //   const [lng1, lat1] = point1;
  //   const [lng2, lat2] = point2;
  //   const R = 6371e3; // Earth radius in meters
  //   const φ1 = (lat1 * Math.PI) / 180;
  //   const φ2 = (lat2 * Math.PI) / 180;
  //   const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  //   const Δλ = ((lng2 - lng1) * Math.PI) / 180;

  //   const a =
  //     Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
  //     Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  //   const distance = R * c;
  //   return distance;
  // }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current ? mapContainer.current : "map", // Use the current of the ref
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("style.load", () => {
      map.current.setFog({}); // Set the default atmosphere style
    });

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
        },
      ],
    };

    map.current.on("load", () => {
      // Add a single point to the map.

      map.current.addSource("point", {
        type: "geojson",
        data: geojson,
      });

      map.current.addLayer({
        id: "point",
        type: "circle",
        source: "point",
        paint: {
          "circle-radius": 30, // Radius of the circle in pixels
          "circle-color": "transparent", // Transparent background
          "circle-stroke-color": "white", // Border color
          "circle-stroke-width": 2, // Border width
          "circle-stroke-dasharray": [1, 3],
        },
      });

      map.current.on("move", () => {
        const { lng, lat } = map.current.getCenter();
        // Prevent the default map drag behavior.
        geojson.features[0].geometry.coordinates = [lng, lat];
        map.current.getSource("point").setData(geojson);
      });
    });
  });

  useEffect(() => {
    if (stations.length !== 0) {
      for (const marker of stations) {
        // Create a DOM element for each marker.
        const el = document.createElement("div");
        el.classList.add("marker");
        el.className = "marker";
        el.id = marker.id;

        el.addEventListener("click", () => {
          selectStation(marker);
          map.current.flyTo({
            center: marker.geo,
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
            duration: 1200,
          });
        });
        // Add markers to the map.

        // map.current.on("move", () => {
        //   const { lng, lat } = map.current.getCenter();
        //   const distance = calculateDistance(marker.geo, [lng, lat]);
        //   if (distance < 52606) {
        //     el.classList.add("whiteMarker");

        //     el.click();
        //   } else {
        //     el.classList.remove("whiteMarker");
        //   }
        // });

        new mapboxgl.Marker(el).setLngLat(marker.geo).addTo(map.current);
      }
    }
  }, [stations, selectStation]);

  return { mapContainer, map };
}
