// payload utils
export const fetchPayload = (id) => {

  return $.ajax({
    method: "GET",
    url: `api/users/${id}`,
  });
};
// session utils
export const createUser = (user) => {

  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  });
};

export const createSession = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    method: "DELETE",
    url: `api/session/`
  });
};

// album utils
export const fetchAlbum = id => {
  
  return $.ajax({
    method: "GET",
    url: `api/albums/${id}`
  });
};

export const fetchAlbums = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}/albums`
  });
};

export const createAlbum = (album) => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${album.id}/albums`,
    data: { album }
  });
};

// artist utils
export const fetchArtist = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/artists${id}`
  });
};

export const fetchArtists = () => {
  return $.ajax({
    method: "GET",
    url: 'api/users'
  });
};

//track utils
export const fetchTrack = id => {
  return $.ajax({
    method: "GET",
    url: `api/tracks/${id}`
  });
};

export const fetchTracks = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}/tracks`
  });
};

export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: `api/albums/${track.album_id}/tracks`
  });
};

// search utils
export const fetchSearchResults = (results) => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${track.album_id}/tracks`
  });
};