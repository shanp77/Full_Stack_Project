import { connect } from 'react-redux';
import { logOutUser } from '../../actions/session';
import React from 'react';

const msp = (state) => {
  return ({
  });
};

const mdp = dispatch => ({
  logOut: () => dispatch(logOutUser()),
});

  class NavMenu extends React.Component {

    constructor(props) {
      super(props);

      
      this.state = {
        showMenu: false
      };
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }


    showMenu(event) {
      event.preventDefault();

      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }

    closeMenu() {
      this.setState({ showMenu:false }, () => {
          document.removeEventListener('click', this.closeMenu); }); 
    }

    render() {
    
    return (
      <div>
        <button className="menu-button" onClick={this.showMenu}>

        {this.state.showMenu ? (
        <ul className="nav-menu-list">
          <li id="nav-menu-username">{this.props.username}</li>
          <div id="nav-menu-divider"></div>
              <li onClick={this.props.logOut}><div>log out</div></li>
        </ul>)
        :
        (null)}

        </button>
      </div>
    )
    }
  }
export default connect(msp, mdp)(NavMenu);