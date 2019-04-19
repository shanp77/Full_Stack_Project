import * as APIUtils from "../utils/session_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user: user
});

const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createUser = user => dispatch => {
  return APIUtils.createUser(user).then( user => dispatch(receiveCurrentUser(user)));
};

export const logInUser = user => dispatch => {
  return APIUtils.createSession(user).then( user => dispatch(receiveCurrentUser(user)));
};

export const logOutUser = () => dispatch => {
  
  return APIUtils.deleteSession().then(() => dispatch(logOutCurrentUser()));
};


