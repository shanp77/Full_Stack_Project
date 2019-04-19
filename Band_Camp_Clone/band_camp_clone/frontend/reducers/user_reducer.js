import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";

const nullUser = {
  currentUser: null
};
const userReducer = (state = {}, action) => {
      Object.freeze(state);
      switch (action.type) {
        case RECEIVE_CURRENT_USER:
          
        
          return Object.assign({}, { [action.user.id]: action.user });
        default:
          return state;
      }
  
};

export default userReducer;