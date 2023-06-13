import axiosRequest from ".";

export const fetchSongsData = async () => {
  const url = `songs?select=*`;
  return await axiosRequest.get(url)
} 
