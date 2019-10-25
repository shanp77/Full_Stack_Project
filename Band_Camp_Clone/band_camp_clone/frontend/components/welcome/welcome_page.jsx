import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './nav_menu';
import SearchBar from './search_bar';

const welcomePage = (props) => {
  
  const demoLogin = (e) => {
    e.preventDefault();
    let user = {
      username: "shane",
      password: "password"
    };
    return props.logInUser(user);
  };

  const loggedOutView = () => (
    
    <div className="nav-logged-out">
      <Link className="logo-link" to="/" >
        <img className="site-logo" src={require('./logo.png')} />
      </Link>
      <SearchBar />
      <div className="nav-logged-out-links">
          <button onClick={demoLogin}>guest login</button>
          <button onClick={() => props.openModal("signup")}>sign up</button>
         <Link to='/login'>log in</Link>
      </div>
    
    </div>
  )
  
    const personalGreeting = () => (
      <div className="nav-logged-in">

        <Link to="/" ><img className="site-logo" src="logo.png" /></Link>
        <div className="nav-logged-in-right">
          {/* <h3>Welcome {props.currentUser.username}</h3> */}
          <NavMenu logout={props.logOut} username={props.currentUser.username}/>
        </div>
      </div>
    );
     
    return props.currentUser ? personalGreeting() : loggedOutView()
}

export default welcomePage;