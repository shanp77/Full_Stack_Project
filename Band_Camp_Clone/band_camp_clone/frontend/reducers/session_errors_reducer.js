import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from "../actions/session";

const nullSession = {
  id: null
};

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }

};

export default sessionErrorsReducer;