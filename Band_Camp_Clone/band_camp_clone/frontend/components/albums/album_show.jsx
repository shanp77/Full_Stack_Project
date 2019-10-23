import React from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router-dom';
import SongIndex from '../song_index.jsx';
import sound from './bensound-cute.mp3';
class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.album = null;
    this.state = {
      artistId: this.props.match.params.artistId,
      currentTrackUrl: null,
      currentTrackNumber: null,
      isPlaying: false
    };

    // class properties
    this.myAudio = null;
    this.tracksLoaded = false;
    this.songs = null;
    this.listenersSet = false;

    // bind functions to 'this'
    this.playSong = this.playSong.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.togglePlayBack = this.togglePlayBack.bind(this);

    this.rap = null;

    setInterval( () => {console.log(this.state.isPlaying);}, 1000);
  }

  componentDidUpdate() {
    
  }

  componentDidMount() {
    console.log(this.state.artistId);
    this.props.fetchPayload(this.state.artistId);
    
    
  }

  togglePlayBack(isPlaying) {
    this.setState({isPlaying});
  }

  playSong(trackId) {

    // convert array element number to track number
    let track = trackId + 1;

    console.log(track, this.state.currentTrackUrl);
    if(track !== this.state.currentTrackNumber) {
      this.setState({currentTrackUrl: this.props.tracks[trackId].song_url});
      this.setState({ currentTrackNumber: this.props.tracks[trackId].ord });
    } else if(this.state.isPlaying === false){
        this.myAudio.play();
    } else if(this.state.isPlaying === true) {
        this.myAudio.pause();
    }
  }

  onEnded() {
    // if last track has ended, stop playback
    if(this.state.trackNumber === this.props.tracks.length) return;

    let nextTrack = this.state.currentTrackNumber ;
    //debugger
    this.setState({currentTrackUrl: this.props.tracks[nextTrack].song_url});
    this.setState({ currentTrackNumber: this.props.tracks[nextTrack].ord });
  }

  render() {
    // if album tracks haven't loaded, render empty div tag
    if(!this.props.artist) return (<div></div>);
    
    //add event listeners for Audio tag - pause,playing
    if (document.getElementById('myAudio') && this.listenersSet === false) {
      
      this.myAudio = document.getElementById('myAudio');
      this.myAudio.addEventListener('pause', () => this.togglePlayBack(false));
      this.myAudio.addEventListener('playing', () => this.togglePlayBack(true));
      this.listenersSet = true;
    }
    
    if(this.state.currentTrackUrl === null) {
      this.setState({currentTrackUrl: this.props.tracks[0].song_url})
      this.setState({ currentTrackNumber: this.props.tracks[0].ord });
    }
    // check if artist has banner image, artist image
    let banner_img;
    let artist_img;
    if(this.props.artist.hasOwnProperty("banner_img")) banner_img = this.props.artist.banner_img 
    if(this.props.artist.hasOwnProperty("artist_img")) artist_img = this.props.artist.artist_img 
    
    // make tracks table
    if(this.props.tracks && !this.tracksLoaded) {
      this.songs = this.props.tracks;
      this.songs.sort((a,b) => {
        return a.ord - b.ord
      })
      this.tracksLoaded = true;
      console.log(this.songs)
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
                    <ReactAudioPlayer id="myAudio" src={this.state.currentTrackUrl} autoPlay controls onEnded={this.onEnded} ref={(element) => { this.rap = element; }}/>
                  </span>
                  <ul className="album-tracks-container">
                    {<SongIndex songList={this.songs} playSong={this.playSong}/>}
                  </ul>
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
                  <p id="artist-photo-name">{this.props.artist.artistname}</p>
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
