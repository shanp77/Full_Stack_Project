import { connect } from 'react-redux';
import SignupForm from './signup_form.jsx';
import { createUser, clearErrors } from './../../actions/session';
import { closeModal } from './../../actions/modal_actions';

const mapStateToProps = state => {
  
  let localState = {
    artistname: "",
    username: "",
    password: "",
    email: "",
  };
  return ({
    state: localState,
    formType: "signup",
    errors: state.errors.sessionErrors,
    modal: state.modal
  });
};

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);