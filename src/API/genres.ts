import axiosRequest from './_index';

export const fetchSongGenresData = async () => {
  const url = 'category?select=*';
  return await axiosRequest.get(url);
};
