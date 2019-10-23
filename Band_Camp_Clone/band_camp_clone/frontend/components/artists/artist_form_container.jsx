import React from 'react';
import ArtistForm from './artist_form';
import { connect } from 'net';
import { createArtist } from '../../actions/artist_actions';

const msp = state => {

  return ({

  });
};

const mdp = dispatch => {

  return ({
    createArtist: artist => dispatch(createArtist(artist))
  });
};

connect(msp, mdp)(ArtistForm);