import axiosRequest from ".";

export const fetchSongsData = async () => {
  console.log('chay');
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