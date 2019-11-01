import React from 'react';
// import default_img from '../../icons/default_img.png';
import { Link } from 'react-router-dom';
//import default_img from '../../icons/play_button.png';

class Splash extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    artists: null
  }
}

componentDidMount() {
  this.props.fetchArtists();
  
}

render() {
  console.log(this.props.artists);

  //return empty div tag if data not yet loaded from backend
  if(Object.keys(this.props.artists).length === 0) return (<div></div>)

  let albumOfTheDay = null;

  let artists = Object.values(this.props.artists).map((artist,idx) => {
    if(idx === 0) {
      albumOfTheDay = (
      <div className="album-of-the-day">
        <img className="daily-album-image" src={require("../../icons/default_img.png")} />
        <div className="album-of-the-day-info-box">
          <span className="artist-name"> by {artist.artistname}</span>
          <div className="category">ALBUM OF THE DAY</div>
        </div>
      </div>
      );
      
    } else if(artist.albums) {
      // feature random album from artist's discography
      let randomId = Math.floor(Math.random() * (Object.keys(artist.albums).length) + 1);
      let featuredAlbum = artist.albums[randomId]; 
      
      return(
        <li key={artist.id} className="artist-list-item">
          <img className="artist-image" src={featuredAlbum.cover_photo} />
          <div className="artist-info-box">
            <span className="album-name">{featuredAlbum.name}</span>
            <span className="artist-name">{artist.artistname}</span>
            <div className="category">LIST</div>
          </div>
          
        </li>
      )
    } else {
      return (
        <li key={artist.id} className="artist-list-item">
          <img className="artist-image" src={require("../../icons/default_img.png")} />
          <div className="artist-info-box">
            <span className="artist-name">{artist.artistname}</span>
            <div className="category">LIST</div>
          </div>
          
        </li>
      )
    }
  })
  //debugger
  return (
    <div id="splash-main">
      <div className="featured-artists">
        <Link id="left-featured-img-container" to={`/artists/${this.props.artists[4].id}`}>
        <img id="left-featured-img" src={this.props.artists[4].artist_img} />
        </Link>
        <span className="featured-right-col">
          <img src={this.props.artists[1].artist_img} />
          <img src={this.props.artists[2].artist_img} />
          <img src={this.props.artists[3].artist_img} />
        </span>
      </div>
      <div className="fan-support-message">Fans support artists on Bandland, 
        to the tune of <span className="fan-cash">$0 million</span> in the last 30 days alone!</div>
      <div className="main-artist-list">
        <div className="bandland-daily">BANDLAND DAILY</div>
        <div className="artists">
          <ul className="artist-list">
            {albumOfTheDay}
            {artists}
          </ul>
        </div>
      </div>
    </div>
  )
}
}

export default Splash;