
import axiosRequest from './_index';

export const fetchSongsData = async () => {
  const url = `rest/v1/songs?select=*`;
  return await axiosRequest.get(url);
};

export const fetchSongDetailData = async (id: number) => {
  const url = `rest/v1/songs?id=eq.${id}&select=*`;
  return await axiosRequest.get(url);
};

