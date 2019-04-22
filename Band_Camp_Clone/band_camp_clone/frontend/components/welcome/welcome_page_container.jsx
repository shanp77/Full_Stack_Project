import welcomePage from './welcome_page';
import { connect } from 'react-redux';
import { logOutUser, logInUser } from '../../actions/session';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {

  let currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser,
    formType: state.ui.formType
  });
};

const mdp = dispatch => ({
  logOut: () => dispatch(logOutUser()),
  openModal: (modal) => dispatch(openModal(modal)),
  logInUser: (user) => dispatch(logInUser(user))
});

export default connect(msp, mdp)(welcomePage);