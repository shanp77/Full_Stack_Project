import React from 'react';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.createUser(this.state).then(() => this.props.history.push('/'));
  }

  update(field){ 
    return (e) => this.setState({[field]: e.target.value });
  }

  render() {


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <label >E-mail
            <input type="email" onChange={this.update("email")} value={this.state.mail} />
            </label>
          </li>
          <li>
            <label >Username
            <input type="text" onChange={this.update("username")} value={this.state.username}/>
            </label>
          </li>
          <li>
            <label >Password
            <input type="password" onChange={this.update("password")} value={this.state.password} />
            </label>
          </li>
          <li>
            <input type="submit" value="Sign Up"/>
          </li>
        </ul>
        </form>
      </div>
    )
  }
}

export default SignupForm;