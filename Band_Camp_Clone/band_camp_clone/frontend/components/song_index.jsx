import React from 'react';
import SongIndexItem from './song_index_item';

let msp = (state) => {

};

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let songs = [];
    if(this.props.songList) {
      songs = this.props.songList.map(song => {
        return (<SongIndexItem key={song.ord} ord={song.ord} 
                  title ={song.title} url={song.song_url} 
                  playSong={this.props.playSong} length={song.length}
                  currentSong={this.props.currentSong} isPlaying={this.props.isPlaying}
                  firstLoad={this.props.firstLoad}/>)
      });
    }
    
    return songs;
  }
}

export default SongIndex;