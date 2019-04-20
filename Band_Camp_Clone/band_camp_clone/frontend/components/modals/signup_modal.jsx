import React from 'react'
import SignupContainer from '../session/signup_container';

const modal = (modal, closeModal) => {
  if(!modal) {
    return null;
  }
  let component;
  switch(modal) {
    case "signup":
      component = <SignupContainer />;
      break;
    default:
      return null;
  }

  return (
    <div class="modal-background" onClick={closeModal}>
      <div class="modal-child" onclick={e => e.stopPropagation()}>
        
      </div>
    </div>
  )


}