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

  let artists = Object.values(this.props.artists)
  artists = artists.filter(artist => {
    return artist.artistname === "shane's band" ? false : true;
  })

  // get featured artists from state
  let featuredArtist1 = artists.find(artist => {
    return artist.artistname === "Edward Simon"
  })
  let featuredArtist2 = artists.find(artist => {
    return artist.artistname === "Judy Wexler"
  })
  let featuredArtist3 = artists.find(artist => {
    return artist.artistname === "Project 86"
  })
  let featuredArtist4 = artists.find(artist => {
    return artist.artistname === "John Raymond"
  })

  //map albums list for bandland daily section
  artists = artists.map((artist,idx) => {
    if(idx === 0) {
      // feature random album from artist's discography
      let albums = Object.values(artist.albums);
      let randomId = Math.floor(Math.random() * (Object.keys(artist.albums).length));
      let featuredAlbum = albums[randomId]; 
      albumOfTheDay = (
      <div className="album-of-the-day">
          <Link to={`/artists/${featuredAlbum.artist_id}/albums/${featuredAlbum.id}`}>
            <img className="daily-album-image" src={featuredAlbum.cover_photo} />
          </Link>
        <div className="album-of-the-day-info-box">
          <span className="album-of-the-day-name">
              <Link to={`/artists/${featuredAlbum.artist_id}/albums/${featuredAlbum.id}`} style={ {textDecoration: 'none', color: 'black'} }>
                {featuredAlbum.name}
              </Link>
          </span>
          <span className="featured-artist-name">
          <Link to={`/artists/${featuredAlbum.artist_id}`} style={{ textDecoration: 'none', color: 'black' }}>
            by {artist.artistname}
          </Link>
          </span>
          <div className="category">ALBUM OF THE DAY</div>
        </div>
      </div>
      );
      
    } else if(artist.albums) {
      // feature random album from artist's discography
      let albums = Object.values(artist.albums);
      let randomId = Math.floor(Math.random() * (Object.keys(artist.albums).length));
      let featuredAlbum = albums[randomId]; 
      return(
        <li key={artist.id} className="artist-list-item">
          <Link to={`artists/${artist.id}/albums/${featuredAlbum.id}`}>
            <img className="artist-image" src={featuredAlbum.cover_photo} />
          </Link>
          <div className="artist-info-box">
            <span className="album-name">{featuredAlbum.name}</span>
            <span className="artist-name"><Link to={`artists/${artist.id}`}>{artist.artistname}</Link></span>
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
  return (
    <div id="splash-main">
      <div className="featured-artists">
        <Link id="left-featured-img-container" to={`/artists/${featuredArtist1.id}`}>
          <img id="left-featured-img" src={featuredArtist1.artist_img} />
        </Link>
        <span className="featured-right-col">
          <Link id="right-featured-img-container" to={`/artists/${featuredArtist2.id}`}>
            <img className="right-featured-img" src={featuredArtist2.artist_img} />
          </Link>
          <Link id="right-featured-img-middle-container" to={`/artists/${featuredArtist3.id}`}>
            <img className="right-featured-img" src={featuredArtist3.artist_img} />
          </Link>
          <Link id="right-featured-img-container" to={`/artists/${featuredArtist4.id}`}>
            <img className="right-featured-img" src={featuredArtist4.artist_img} />
          </Link>
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