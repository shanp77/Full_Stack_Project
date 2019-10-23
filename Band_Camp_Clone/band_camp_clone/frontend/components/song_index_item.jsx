import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
   
  }

  playSong(e) {

  }
  render() {
    var trackId = this.props.ord - 1;
    var playSong = this.props.playSong;

    // build song length string
    var s = this.props.length % 60;
    var seconds = s < 10 ? `0${s}` : s;
    var minutes = Math.floor(this.props.length / 60);
    
    var length = this.props.length ? `${minutes}:${seconds}` : null;

    //song index item jsx
    return (
    <li className="song-index-item" key={this.props.ord}>
      <span className="play-icon-container" onClick={ () => {playSong(trackId)} }>
        <img className="play-icon" src={require("../icons/play_button.png")} alt="" />
      </span>
      <span className="song-order">{this.props.ord}. </span>
      <span>{this.props.title}</span>
      <span className="song-length">{length}</span>
    </li>
    )
  }
}

export default SongIndexItem;