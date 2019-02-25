import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.festdrink.com.br/api'
});

export default api;