



import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoic2FsY3JvbSIsImEiOiJjbTF4czh0cXIwejRpMnFzamt6YnY0bDF4In0.KWXgX5LAym0ZnZL6DIB7qg'
    }
})

export default directionsApi;
