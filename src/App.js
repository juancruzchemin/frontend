import React, { useState } from 'react';

import Mapquest from './components/Mapquest';
import MiUbicacion from './components/MiUbicacion';
import Busqueda from './components/Busqueda';



function App() {
  //component state
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  let markers = [];

  //fijar el centro del mapa 
  const setCenter = (lat, lng) => {
    setLat(lat);
    setLng(lng);

    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat, lng), 12); 
  };

  //crea el marcador 
  const addMarker = (lat, lng, title, subtitle) => {
    const marker = window.L.mapquest.textMarker(
      new window.L.LatLng(lat, lng),
      {
        text: title || '',
        subtext: subtitle || '',
        position: 'right',
        type: 'marker',
        icon: {
          primaryColor: '#1373F6',
          secondaryColor: '#2679EA',
          size: 'md'
        }
      }
    )
    .addTo(window.L.mapquest.Map.getMap('map'));
    
    markers.push(marker);
  
  };
  //esto borraria los marcadores ya marcados, pero no se si es buena idea borrarlos todavia
  const clearMarkers = () => {};

  //lo que veo por pantalla
  return (
   <div className="container-fluid">
        <div className="row pl-3 pr-3 pt-3 pb-3">
          <div className="col-sm-10">
            <Busqueda setCenter={setCenter} addMarker={addMarker} clearMarkers={clearMarkers}/>
          </div>
          <div className="col-sm-2">
            <MiUbicacion setCenter={setCenter} addMarker={addMarker}/>
          </div>
         </div>
         <Mapquest
            height="80vh"
            width="100%"
            center={[lat,lng]}
            tileLayer={'map'} //map o dark
            zoom={12}
            apiKey="DU0Iw1t8ZHPClYX7uXXhlYpUPGScKGUk"
         />
   </div>
  );
}

export default App;
