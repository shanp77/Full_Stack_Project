import * as APIUtils from "../utils/session_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user: user
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

export const createUser = user => dispatch => {
  return APIUtils.createUser(user).then( user => dispatch(receiveCurrentUser(user)),
    err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ));
};

export const logInUser = user => dispatch => {
  return APIUtils.createSession(user).then( user => dispatch(receiveCurrentUser(user)),
    err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ));
};

export const logOutUser = () => dispatch => {
  
  return APIUtils.deleteSession().then(() => dispatch(logOutCurrentUser()));
};

