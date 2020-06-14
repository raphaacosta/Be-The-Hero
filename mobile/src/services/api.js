import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mysterious-earth-86666.herokuapp.com/'
});

export default api;