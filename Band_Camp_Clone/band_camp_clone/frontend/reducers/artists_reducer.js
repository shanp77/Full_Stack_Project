import { RECEIVE_ARTISTS } from "../actions/artist_actions";

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    default:
      return state;
  }
};

export default artistsReducer;