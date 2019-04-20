import React from 'react';
import { Link } from 'react-router-dom';

const welcomePage = (props) => {

  const loggedOutView = () => (
    <div className="nav-logged-out">
      <div className="site-logo"></div>
      <div className="nav-logged-out-links">
          <Link to='/signup'>sign up</Link>
          <Link to='/login'>log in</Link>
      </div>
    
    </div>
  )
    const personalGreeting = () => (
      <div className="nav-logged-in">

        <div className="site-logo">
          <img src="../../../config/logo.png" alt=""/>
        </div>
        <div className="nav-logged-in-right">
          <h3>Welcome {props.currentUser.username}</h3>
          <button onClick={props.logOut}>Log Out</button>
        </div>
        
      </div >
    );
      //debugger
    return props.currentUser ? personalGreeting() : loggedOutView()
}

export default welcomePage;