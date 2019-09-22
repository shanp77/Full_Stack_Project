import ArtistShow from './artist_show';
import { connect } from 'react-redux';
import { fetchPayload } from '../../actions/session';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';
import { fetchTrack, fetchTracks, createTrack } from '../../actions/track_actions';
import {
  selectCurrentUser, selectCurrentAlbum,
  selectAllAlbums, selectAllTracks, selectArtist
} from '../../reducers/selectors';

const msp = (state, ownProps) => {
  let artistId = parseInt(ownProps.match.params.id);
  return ({
    artist: selectArtist(state, artistId),
    currentUser: selectCurrentUser(state),
    albums: selectAllAlbums(state, artistId),
  });
};

// const msp = (state, ownProps) => {
  
//   let artist = state.entities.users[ownProps.match.params.id];
//   let currentUser = state.entities.users[state.session.id];

//   return ({
//     currentUser: currentUser,
//     artist: artist,
//     albums: state.entities.albums
//   });
// };

const mdp = dispatch => ({
  logInUser: (user) => dispatch(logInUser(user)),
  fetchPayload: id => dispatch(fetchPayload(id)),
  createAlbum: album => dispatch(createAlbum(album)),
  createTrack: track => dispatch(createTrack(track))
});

export default connect(msp, mdp)(ArtistShow);




  // fetchAlbum: id => dispatch(fetchAlbum(id)),
  // fetchAlbums: id => dispatch(fetchAlbums(id)),
  
  // fetchTrack: id => dispatch(fetchTrack(id)),
  // fetchTracks: id => dispatch(fetchTracks(id)),
  