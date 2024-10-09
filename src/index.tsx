import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsY3JvbSIsImEiOiJjbTF4czh0cXIwejRpMnFzamt6YnY0bDF4In0.KWXgX5LAym0ZnZL6DIB7qg';


if( !navigator.geolocation ) {
  alert('Tu navegador no tiene opción de Geolocalización');
  throw new Error('Tu navegador no tiene opción de Geolocalización');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
