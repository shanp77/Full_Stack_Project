import * as APIUtils from "../utils/session_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_PAYLOAD = "RECEIVE_PAYLOAD";

const receivePayload = (payload) => ({
  type: RECEIVE_PAYLOAD,
  payload
});

const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchPayload = id => dispatch => {
  return APIUtils.fetchPayload(id).then(payload => dispatch(receivePayload(payload)))
};

export const createUser = user => dispatch => {
  return APIUtils.createUser(user).then( payload => dispatch(receiveCurrentUser(payload)),
    err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ));
};

export const logInUser = user => dispatch => {
  return APIUtils.createSession(user).then(payload => dispatch(receiveCurrentUser(payload)),
    err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ));
};

export const logOutUser = () => dispatch => {
  
  return APIUtils.deleteSession().then(() => dispatch(logOutCurrentUser()));
};

