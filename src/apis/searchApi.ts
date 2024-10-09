

import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/search/geocode/v6/forward?q=',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoic2FsY3JvbSIsImEiOiJjbTF4czh0cXIwejRpMnFzamt6YnY0bDF4In0.KWXgX5LAym0ZnZL6DIB7qg'
    }
})

export default searchApi;
