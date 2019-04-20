import { RECEIVE_SESSION_ERRORS } from "../actions/session";

const nullSession = {
  id: null
};

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }

};

export default sessionErrorsReducer;