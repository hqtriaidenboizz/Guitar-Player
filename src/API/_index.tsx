import axios from 'axios';
import {API_KEY} from '../constants/Apikey';

const ROOT_URL = 'https://povqcjufmbtvlhvbgtmq.supabase.co/';

const axiosRequest = axios.create({
  baseURL: ROOT_URL,
});

axiosRequest.interceptors.request.use(
  config => {
    config.headers.apikey = API_KEY;
    config.headers.Authorization = `Bearer ${API_KEY}`;
    return config;
  },
  error => {
    // console.log(error);
    return Promise.reject(error);
  },
);

axiosRequest.interceptors.response.use(
  response => {
    return response;
  },
  (error = {}) => {
    console.log('⚠️: error', error);
  },
);

export default axiosRequest;
