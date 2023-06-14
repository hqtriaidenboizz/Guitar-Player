import {AxiosResponse} from 'axios';
import axiosRequest from './_index';

export const fetchSongsData = async () => {
  const url = `songs?select=*`;
  return await axiosRequest.get(url);
};

export const fetchSongDetailData = async (id: number) => {
  const url = `songs?id=eq.${id}&select=*`;
  return await axiosRequest.get(url);
};
