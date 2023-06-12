import axiosRequest from ".";
import { Song } from "../types/song";

export const fetchSongsData = async () => {
  const url = `songs?select=*`;
  return await axiosRequest.get(url)
} 

// export const fetchSongsData = async () => {
//   axiosRequest
//     .get('songs?select=*')
//     .then(response => {
//       // Handle the response
//       console.log(response.data);
//     })
//     .catch(error => {
//       // Handle errors
//       console.error(error);
//     });
// }; 