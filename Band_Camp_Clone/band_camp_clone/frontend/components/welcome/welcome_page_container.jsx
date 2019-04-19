import welcomePage from './welcome_page';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/session';

const msp = (state) => {

  let currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser
  });
};

const mdp = dispatch => ({
  logOut: (id) => dispatch(logOutUser(id))
});

export default connect(msp, mdp)(welcomePage);