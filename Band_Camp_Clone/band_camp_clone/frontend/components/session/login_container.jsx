import { connect } from 'react-redux';
import LoginForm from './login_form.jsx';
import { logInUser, clearErrors } from './../../actions/session';

const mapStateToProps = state => {
 
  let localState = {
    username: "",
    password: ""
  };
  return ({
    state: localState,
    formType: "login",
    errors: state.errors.sessionErrors
  });
};

const mapDispatchToProps = dispatch => ({
  logInUser: user => dispatch(logInUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);