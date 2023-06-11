import axios from 'axios';
import {API_KEY} from '../constants/Apikey';

const ROOT_URL = 'https://povqcjufmbtvlhvbgtmq.supabase.co/rest/v1/';

// const axiosRequest = axios.create({
//   baseURL: ROOT_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${API_KEY}`,
//     apikey: API_KEY,
//   },
// });
const axiosRequest = axios.create({
  baseURL: ROOT_URL,
});

axiosRequest.interceptors.request.use(
  config => {
    config.headers.apikey = API_KEY;
    config.headers.Authorization= `Bearer ${API_KEY}`;
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosRequest.interceptors.response.use(
  response => {
    console.log('thanh cong', response.data);
    
    return response.data;
  },
  (error = {}) => {
    console.log('⚠️: error', error);
  },
);

export default axiosRequest;
