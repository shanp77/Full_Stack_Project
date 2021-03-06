import React from 'react';

export const selectCurrentUser = state => {
  return state.entities.users[state.session.id];
};

export const selectCurrentAlbum = (state, albumId) => {
  return state.entities.albums[albumId];
};

export const selectArtist = (state, artistId) => {
  
  return state.entities.users[artistId];
};

export const selectAllArtists = (state) => {
  return state.entities.artists;
};

export const selectAllTracks = (state, albumId) => {
  let album = selectCurrentAlbum(state, albumId);
  // debugger
  let tracks = null;
  if(state.entities.tracks && album) {
    tracks = Object.values(state.entities.tracks).filter(track => {
      
      return track.album_id === album.id;
    });
   
  }
  return tracks;
};

export const selectAllAlbums = (state, artistId) => {
  let artistAlbums = [];
  
  if (state.entities.albums) {
    let array = Object.values(state.entities.albums);
    
    array.forEach(album => {
      if (album.artist_id === artistId) artistAlbums.push(album);
    });
  }
  
  return artistAlbums;
};