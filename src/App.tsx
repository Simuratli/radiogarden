import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltdXJhdGxpIiwiYSI6ImNsc3N5Z283NTBtMnAya211eDV5NXA2MWYifQ.Ezm-c5DtNWk3oWiW-z-Tgg';

function App() {

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(0);



 

  const [stations, setStations] = useState<any>([]);
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Simuratli/radioapi/master/db.json')
  .then(response => {
    // Handle successful response
    // console.log(response.data,'test');
    setStations(response.data.places)
  })
  .catch(error => {
    // Handle error
    console.log('Error fetching data:', error);
  });
    
  }, []);
  

  function removeDuplicateCountryNames(obj:any) {
    const uniqueCountries:any = {};

    // Iterate through the object and store unique country names
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] && obj[key].country) {
            uniqueCountries[obj[key].country] = obj[key];
        }
    }

    // Convert unique countries object back to an array
    const result = Object.values(uniqueCountries);

    return result;
}

  useEffect(() => {
    console.log(stations,'stations')

    if(stations.length !== 0){
      for (const marker of stations) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        el.classList.add('marker')
        el.className = 'marker';
         
        el.addEventListener('click', () => {
          window.alert(marker.country);
        });
         
        // Add markers to the map.
        new mapboxgl.Marker(el).setLngLat(marker.geo).addTo(map.current);
        }
    }
  }, [stations])
  

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    
  },[]);

  return (
    <div className="App">
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </div>
  );
}

export default App;
