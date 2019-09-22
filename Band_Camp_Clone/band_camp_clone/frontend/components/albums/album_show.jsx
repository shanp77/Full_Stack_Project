import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router-dom';
import SongIndex from '../song_index.jsx';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.album = null;
    this.state = {
      artistId: this.props.match.params.artistId
    };
    
  }

  componentDidMount() {
    console.log(this.state.artistId);
    this.props.fetchPayload(this.state.artistId);
    
  }



  render() {
    // if album tracks haven't loaded, render empty div tag
    if(!this.props.tracks.length) return (<div></div>);
    
    // check if artist has banner image, artist image
    let banner_img;
    let artist_img;
    if(this.props.artist.hasOwnProperty("banner_img")) banner_img = this.props.artist.banner_img 
    if(this.props.artist.hasOwnProperty("artist_img")) artist_img = this.props.artist.artist_img 
    
    // make tracks table
    if(this.props.tracks) {
      let songs = this.props.tracks;
      //debugger
      console.log(songs)
    }
    // render page    
    return (
      <div>
        <div id="main-content">

          <div id="banner-image-container-outer">
            <div id="banner-image-container-inner">
              <img src={banner_img} />
            </div>
          </div>

          <div id="main-columns-container-outer">
            <div id="main-columns-container-inner">
              <div id="album-left-middle-columns">
                <div id="album-info-column">
                  <p id="album-artist-name" className="gray-text">{this.props.currentAlbum.name}</p>
                  <p id="artist-by-line">by <Link to={`/artists/${this.state.artistId}`}><span>{this.props.artist.username}</span></Link></p>
                  <span id="song-player-container">
                    <ReactAudioPlayer src="" controls />
                  </span>
                  <table id="album-tracks-table">
                    {/* <SongIndex /> */}
                  </table>
                  <p id="release-date-line">released {this.props.currentAlbum.release_date}</p>
                  <p id="copyright-line">all rights reserved</p>
                </div>
                <div id="album-image-column">
                  <div id="album-image-container">
                    <img src={this.props.currentAlbum.photo_url} />
                  </div>
                </div>
                
                {/* {this.props.tracks} */}
              </div>
              <div id="right-column">
                <div className="artist-photo-container">
                  <img src={this.props.artist.artist_img} />
                  <p id="artist-photo-name">{this.props.artist.username}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AlbumShow;

// let albumList;
// let trackList;
// let artist;
// let artist_img;
// let banner;
// let currentAlbum;

// if (!this.props.currentAlbum) {
//   artist = null;
// } else {
//   artist = this.props.users[this.props.currentAlbum.artistId];
// }

// if (!this.props.artist.hasOwnProperty("banner_img")) {
//   banner = null;
// } else {
//   banner = this.props.artist.banner_img;
// }

// if (!this.props.artist.hasOwnProperty("artist_img")) {
//   artist_img = null;
// } else {
//   artist_img = this.props.artist.artist_img;
// }

// if (!this.props.albums) {
//   albumsList = ["loading..."];
// } else {
//   currentAlbum = this.props.albums[this.props.match.params.id]
//   let albums = Object.values(this.props.albums);
//   let that = this;
//   albumList = albums.map((album) => {
//     if (album.artist_id === artist.id) {
//       return (
//         <li className="album-photo-list-item" key={album.id}>
//           <div className="album-photo-container">
//             <img src={album.photo_url} />
//             <p>{album.name}</p>
//           </div>
//         </li>
//       )
//     }
//   })
// }


// if (!this.props.tracks) {
//   trackList = ["loading..."];
// } else {
//   let tracks = Object.values(this.props.tracks);
//   trackList = tracks.map((track) => {
//     return (
//       <li key={track.id}>{track.title}</li>
//     )
//   })
// }
