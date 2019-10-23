import { RECEIVE_TRACK, RECEIVE_TRACKS } from "../actions/track_actions";
import { RECEIVE_PAYLOAD, RECEIVE_CURRENT_USER } from '../actions/session';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let tracks;
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign({}, state, action);
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_CURRENT_USER:
      tracks = action.payload.tracks;
      return Object.assign({}, state, tracks);
    case RECEIVE_PAYLOAD:
      tracks = action.payload.tracks;
      return Object.assign({}, tracks);
    default:
      return state;
  }
};

export default tracksReducer;