import React from 'react'
import SignupContainer from '../session/signup_container';
import { closeModal } from '../../actions/modal_actions.js';
import { connect } from 'react-redux';
import NavMenu from '../welcome/nav_menu';
const Modal = (props, closeModal) => {
  
  if(!props.modal) {
    return null;
  }
  let component;
  let background;
  let child;
  switch(props.modal) {
    case "signup":
      component = <SignupContainer />;
      background = "modal-signup-background";
      child = "modal-signup-child";
      break;
    default:
      return null;
  }

  return (
    <div className={background} onClick={() => closeModal}>
      <div className={child} onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);