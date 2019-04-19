import { connect } from 'react-redux';
import SignupForm from './signup_form.jsx';
import { createUser } from './../../actions/session';

const mapStateToProps = state => {
  
  let localState = {
    username: "",
    password: "",
    email: ""
  };
  return ({
    state: localState,
    formType: "signup"
  });
};

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);