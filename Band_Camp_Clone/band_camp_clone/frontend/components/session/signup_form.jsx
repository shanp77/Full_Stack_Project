import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e, redirect=false) {
   
    e.preventDefault();
    return this.props.createUser(this.state).then(() => this.props.closeModal());
  }

  redirectToLogin(e) {
    console.log("redirectlogin invoked");
    //this.props.closeModal();
    // <Redirect to="/login" />
  }

  update(field){ 
    return (e) => this.setState({[field]: e.target.value });
  }

  render() {
    let errorStatus;
    if (this.props.errors.length > 0) {
      errorStatus = "input-errors";
    } else {
      errorStatus = "input-no-errors";
    }

    return (
      <div className="form-signup">
        <span className="signup-header"><div>Sign up for a Bandland account</div>
        <button id="modal-close" onClick={this.props.closeModal}>X</button></span>
        <div className="divide-line" ></div>
        <form onSubmit={this.handleSubmit}>
          <div className="session-elements-container">
            <ul className="session-elements-list">
              <li>
                <label>Artist/Band name</label><br />
                <input type="text" className={errorStatus} onChange={this.update("artistname")} value={this.state.artistname} />
              </li>

              <li>
                <label>E-mail</label><br/>
                <input type="email" className={errorStatus} onChange={this.update("email")} value={this.state.email} />
              </li>
              <li>
                  <label >Username</label><br/>
                <input type="text" className={errorStatus} onChange={this.update("username")} value={this.state.username}/>
                
              </li>
              <li>
                  <label >Password </label><br/>
                <input type="password" className={errorStatus} onChange={this.update("password")} value={this.state.password} />
              
              </li>
                <li className="errors">
                  {this.props.errors}
                </li>
              <li>
                <input className="login-signup-button" type="submit" value="Sign Up"/>
              </li>
            </ul>
            <div id="login-link-text" >Already have an account? 
              <Link to="login" onClick={this.props.closeModal}> Log in.</Link></div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignupForm;