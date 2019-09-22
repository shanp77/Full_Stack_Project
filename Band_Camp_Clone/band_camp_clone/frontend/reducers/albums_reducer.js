import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from "../actions/album_actions";
import { RECEIVE_PAYLOAD, RECEIVE_CURRENT_USER } from '../actions/session';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let albums;
  switch(action.type) {
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action);
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_CURRENT_USER:
      albums = action.payload.albums;
      return Object.assign({}, state, albums);
    case RECEIVE_PAYLOAD:
      albums = action.payload.albums;
      return Object.assign({}, state, albums);
    default:
      return state;
  }
};

export default albumsReducer;