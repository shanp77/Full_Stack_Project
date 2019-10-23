import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import Splash from './splash'; 
import {
  selectCurrentUser, selectAllArtists
} from '../../reducers/selectors';
const msp = state => {

  return ({
    artists: selectAllArtists(state)
  });
};

const mdp = dispatch => {

  return ({
    fetchArtists: () => dispatch(fetchArtists())
  });
};

export default connect(msp, mdp)(Splash);