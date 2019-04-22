import React from 'react';

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

  handleSubmit(e) {
    e.preventDefault();
    return this.props.createUser(this.state).then(() => this.props.closeModal());
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
        <ul className="session-elements-list">
          <li>
            <label>E-mail
            <input type="email" className={errorStatus} onChange={this.update("email")} value={this.state.mail} />
            </label>
          </li>
          <li>
            <label >Username
            <input type="text" className={errorStatus} onChange={this.update("username")} value={this.state.username}/>
            </label>
          </li>
          <li>
            <label >Password
            <input type="password" className={errorStatus} onChange={this.update("password")} value={this.state.password} />
            </label>
          </li>
            <li className="errors">
              {this.props.errors}
            </li>
          <li>
            <input className="login-signup-button" type="submit" value="Sign Up"/>
          </li>
        </ul>
        </form>
      </div>
    )
  }
}

export default SignupForm;