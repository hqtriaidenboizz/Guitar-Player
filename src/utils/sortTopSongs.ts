import {Song} from '../types/song';
const topSongsHandle = (arr: Song[]) => {
  const sortedArr = arr?.sort((a, b) => b?.view - a.view);
  return sortedArr?.slice(0, 10);
};

export default topSongsHandle;
