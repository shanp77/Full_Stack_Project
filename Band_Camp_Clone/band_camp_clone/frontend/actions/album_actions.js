import * as APIUtils from "../utils/session_utils";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  [album.id]: album
});

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});


const receiveAlbumErrors = (errors) => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors: errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchAlbum = id => dispatch => {
  return APIUtils.fetchAlbum(id).then(album => dispatch(receiveAlbum(album))
   
    );
};

export const fetchAlbums = id => dispatch => {
  return APIUtils.fetchAlbums(id).then(albums => dispatch(receiveAlbums(albums)),
    );
};

export const createAlbum = album => dispatch => {
  return APIUtils.createAlbum().then(album => dispatch(receiveAlbum(album))
    
    );
};
