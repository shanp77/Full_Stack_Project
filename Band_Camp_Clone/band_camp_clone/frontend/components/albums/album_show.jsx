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
      currentTrackNumber: 1,
      isPlaying: false,
      firstLoad: true
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
    this.setProgressThumb = this.setProgressThumb.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.rap = null;

  }

  componentDidUpdate() {
    
  }

  componentDidMount() {
    console.log(this.state.artistId);
    this.props.fetchPayload(this.state.artistId);
  }

  togglePlayBack(isPlaying) {
    this.setState({isPlaying, firstLoad: false});
  }

  playSong(trackId = this.state.currentTrackNumber - 1) {
    if(this.state.firstLoad) this.setState({firstLoad: false});
    //debugger

    // convert array element number to track number
    let track = trackId + 1;

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
    this.setState({currentTrackUrl: this.props.tracks[nextTrack].song_url});
    this.setState({ currentTrackNumber: this.props.tracks[nextTrack].ord });
  }

  // get current track title
  getTrackTitle() {
    if (!document.getElementById('myAudio')) return null;
    return this.props.tracks[this.state.currentTrackNumber - 1].title;
  }

  // build time indicator strings
  buildTimeStrings(timeInSecs){
    
    var s = timeInSecs % 60;
    var seconds = s < 10 ? `0${s}` : s;
    var minutes = Math.floor(timeInSecs / 60);

    return timeInSecs ? `${minutes}:${seconds}` : null;
  }

  // return a string of the current time
  getCurrentTime() {
    if (!document.getElementById('myAudio')) return null;

    let timeInSecs = null;
    console.log(document.getElementById('myAudio').currentTime);
    console.log(document.getElementById('myAudio').duration);
    if(document.getElementById('myAudio').currentTime) {
      
      timeInSecs = Math.floor(document.getElementById('myAudio').currentTime);
      this.setProgressThumb(timeInSecs);
      // if(timeInSecs) {
      //   this.setProgressThumb(timeInSecs);
      // }
      //console.log(timeInSecs);
    } else {
      document.getElementById("player-time-elapsed").innerHTML = "0:00";
    }
    
    var s = timeInSecs % 60;
    var seconds = s < 10 ? `0${s}` : s;
    var minutes = Math.floor(timeInSecs / 60);

    document.getElementById("player-time-elapsed").innerHTML = timeInSecs ? `${minutes}:${seconds}` : "0:00";
    // return timeInSecs ? `${minutes}:${seconds}` : null;
  }

  setProgressThumb(timeInSecs) {
    //get the progress bar length minus thumb length
    let progressBar = document.getElementById('player-progress-bar');
    let thumb = document.getElementById('player-thumb');
    let computedStyles = window.getComputedStyle(progressBar);
    let barLength = Number.parseInt(computedStyles.getPropertyValue('width'));
    computedStyles = window.getComputedStyle(thumb);
    let thumbLength = Number.parseInt(computedStyles.getPropertyValue('width'));

    let effectiveLength = barLength - thumbLength;

    //get completion of song at the current time as a percentage of total length
    let songProgress = timeInSecs / this.props.tracks[this.state.currentTrackNumber - 1].length;

    let newMargin = Math.round(songProgress * effectiveLength);
    
    document.getElementById('player-thumb').style.marginLeft = `${newMargin}px`;
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
    
    //set autoplay to true after first playback
    this.myAudio = document.getElementById('myAudio');
    if (this.state.firstLoad === false) {
      this.myAudio.autoplay = true;
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
    }
    // render page    
    return (
      
      <div>
        <div id="main-content">

          <Link to={`/artists/${this.props.artist.id}`} id="banner-image-container-outer">
            <div id="banner-image-container-inner">
              <img src={banner_img} />
            </div>
          </Link>

          <div id="main-columns-container-outer">
            <div id="main-columns-container-inner">
              <div id="album-left-middle-columns">
                <div id="album-info-column">
                  <p id="album-artist-name" className="gray-text">{this.props.currentAlbum.name}</p>
                  <p id="artist-by-line">by <Link to={`/artists/${this.state.artistId}`}><span>{this.props.artist.username}</span></Link></p>
                  <span id="song-player-container">
                    <ReactAudioPlayer id="myAudio" src={this.state.currentTrackUrl} 
                      onTimeUpdate={this.getCurrentTime()} onEnded={this.onEnded} 
                      ref={(element) => { this.rap = element; }} listenInterval={250}
                      onListen={this.getCurrentTime}
                      />

                    <div id="player-icon-background">
                      <img id="player-play-icon" onClick={() => this.playSong()} src={require("./player-play-icon.png")} />
                    </div>
                    <div id="player-info-container">
                      <span id="player-title-tracktime">{this.getTrackTitle()}
                        <span id="player-time-elapsed">
                          {this.getCurrentTime()}
                        </span>
                        /
                        <span id="player-time-duration">{this.buildTimeStrings(this.props.tracks[this.state.currentTrackNumber - 1].length)}</span>
                      </span>
                      <span id="player-progress-bar-cell">
                        <span id="player-progress-bar">
                          <span id="player-thumb"></span>
                        </span>
                      </span>
                    </div>
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
