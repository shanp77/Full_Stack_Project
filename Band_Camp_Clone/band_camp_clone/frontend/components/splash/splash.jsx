import React from 'react';
import default_img from '../../icons/play_button.png';
import { Link } from 'react-router-dom';

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

  let artists = Object.values(this.props.artists).map(artist => {
    return(
      <li key={artist.id} className="artist-list-item">
        <img className="artist-image" src={artist.banner_img ? artist.banner_img : default_img} />
        <span className="artist-name">{artist.artistname}</span>
      </li>
    )
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
      <div>
        <ul className="artist-list">
          {artists}
        </ul>
      </div>
    </div>
  )
}
}

export default Splash;