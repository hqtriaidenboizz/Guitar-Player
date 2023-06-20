import axiosRequest from './_index';

export const fetchSongGenresData = async () => {
  const url = 'rest/v1/category?select=*';
  return await axiosRequest.get(url);
};
