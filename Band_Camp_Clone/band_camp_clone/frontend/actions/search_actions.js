import * as APIUtils from '../utils/session_utils';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";



const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  [results.type]: results
});

const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchSearchResults = query => dispatch => {
  return APIUtils.fetchTrack(query).then(track => dispatch(receiveSearchResults(results)));
};
