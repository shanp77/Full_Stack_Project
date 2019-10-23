import React from 'react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.logInUser(this.state).then(() => this.props.history.push('/'));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  componentWillUnmount() {
    this.props.clearErrors();

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
        <span className="session-header">Log in</span>
        <div className="divide-line" ></div>
        <form onSubmit={this.handleSubmit}>
          <ul className="session-elements-list">
          <table className="w3-table">
          <tbody>
            <tr>
              <td className="col-left">
                <label >Username </label>
              </td>
              <td>
                <input className={errorStatus} type="text" onChange={this.update("username")} value={this.state.username} />
              </td>
            </tr>
            <tr>
              <td className="col-left">
                <label >Password </label>  
              </td>
              <td>
                <input className={errorStatus} type="password" onChange={this.update("password")} value={this.state.password} />
                <div className="errors">
                  {this.props.errors}
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input className="login-signup-button" type="submit" value="Log in" />
              </td>
            </tr>
              </tbody>
          </table>
          </ul>
        </form>
      </div>
    )
  }
}

export default LoginForm;