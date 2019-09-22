import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_PAYLOAD } from "../actions/session";

const nullUser = {
  currentUser: null
};
const userReducer = (state = {}, action) => {
      Object.freeze(state);
      switch (action.type) {
        case RECEIVE_CURRENT_USER:
          return Object.assign({}, action.payload.users);
        case RECEIVE_PAYLOAD:
          let user = action.payload.users;
          return Object.assign({}, state, user);
        default:
          return state;
      }
  
};

export default userReducer;