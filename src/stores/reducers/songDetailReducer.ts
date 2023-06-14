import {SongDetailActions, SongDetailState} from '../../types/song';

const initalState: SongDetailState = {
  pending: false,
  songDetail: [],
  error: null,
};

const songDetailReducer = (state = initalState, acction: SongDetailActions) => {
  switch (acction.type) {
    case 'FETCH_SONGDETAIL_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_SONGDETAIL_SUCCESS':
      return {
        ...state,
        pending: false,
        songDetail: acction.payload.songDetail,
      };
    case 'FETCH_SONGDETAIL_FAILURE':
      return {
        ...state,
        pending: false,
        error: acction.payload.error,
      };
    default:
      return {...state};
  }
};
export default songDetailReducer;
