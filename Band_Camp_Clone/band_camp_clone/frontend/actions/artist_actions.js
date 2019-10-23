import * as APIUtils from "../utils/session_utils";

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST_ERRORS = "RECEIVE_ARTIST_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});


const receiveArtistErrors = (errors) => ({
  type: RECEIVE_ARTIST_ERRORS,
  errors: errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


export const fetchArtists = () => dispatch => {
  return APIUtils.fetchArtists().then(artists => dispatch(receiveArtists(artists))
  );
};
