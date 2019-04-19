import React from 'react';
import { Link } from 'react-router-dom';

const welcomePage = (props) => {

  const loggedOutView = () => (
    <div>
    <Link to='/signup'>Sign Up!</Link>
    <br/>
    <Link to='/login'>Log In</Link>
    </div>
  )
    const personalGreeting = () => (
    < div >
    <h3>Welcome {props.currentUser.username}</h3>
    <button onClick={props.logOut}>Log Out</button>
    </div >
    );
      //debugger
    return props.currentUser ? personalGreeting() : loggedOutView()
}

export default welcomePage;