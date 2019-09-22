import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";

const nullSession = {
  id: null
};

const sessionReducer = (state = nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let sessionId = action.payload.session.id;
      return Object.assign({}, {id: sessionId});
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return state;
  }

};

export default sessionReducer;