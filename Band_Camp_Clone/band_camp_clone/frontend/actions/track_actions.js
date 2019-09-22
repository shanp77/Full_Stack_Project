import * as APIUtils from '../utils/session_utils';

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";



const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  [track.id]: track
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchTrack = id => dispatch => {
  return APIUtils.fetchTrack(id).then(track => dispatch(receiveTrack(track)));
};

export const fetchTracks = (artist_id, album_id) => dispatch => {
  return APIUtils.fetchTracks(artist_id, album_id).then(tracks => dispatch(receiveTracks(tracks)));
};

export const createTrack = (track) => dispatch => {
  return APIUtils.createTrack(track).then(track => dispatch(receiveTrack(track)));
};