import axios from 'axios';

const clientAxios = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
});

export default clientAxios;
