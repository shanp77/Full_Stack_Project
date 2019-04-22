import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

const msp = state => {
  
  return ({
    state: ""
  });
};

const mdp = dispatch => {

  return ({
    default: ""
  });
};

export default connect(msp, mdp)(Splash);