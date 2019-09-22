import { connect } from 'react-redux';
import { fetchPayload } from '../../actions/session';
import AlbumShow  from './album_show';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';
import { fetchTrack, fetchTracks, createTrack } from '../../actions/track_actions';
import {
  selectCurrentUser, selectCurrentAlbum,
  selectAllAlbums, selectAllTracks, selectArtist
} from '../../reducers/selectors';

const msp = (state, ownProps) => {
  let artistId = ownProps.match.params.artistId;
  let albumId = ownProps.match.params.id;
 
  return ({
    artist: selectArtist(state, artistId),
    currentUser: selectCurrentUser(state),
    currentAlbum: selectCurrentAlbum(state, albumId),
    albums: selectAllAlbums(state, artistId),
    tracks: selectAllTracks(state, albumId),
  });
};

const mdp = dispatch => ({
  fetchPayload: id => dispatch(fetchPayload(id)),
  createAlbum: album => dispatch(createAlbum(album)),
  createTrack: track => dispatch(createTrack(track))
});

export default connect(msp, mdp)(AlbumShow);