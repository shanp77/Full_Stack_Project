import React from 'react';
import { Link } from 'react-router-dom';
class ArtistShow extends React.Component {

  constructor(props) {
    super(props);
    this.album = null;
  }

  componentDidMount() {
    let artistId = this.props.match.params.id;
    this.props.fetchPayload(artistId);
  }
  
    
  
  render () {
    // check to see if album list for artist has downloaded
    if (!this.props.albums.length) return (<div></div>)

    // check if artist has banner image, artist image
    let banner_img;
    let artist_img;
    let albumsList;
    if (this.props.artist.hasOwnProperty("banner_img")) banner_img = this.props.artist.banner_img
    if (this.props.artist.hasOwnProperty("artist_img")) artist_img = this.props.artist.artist_img 
    // create cover photo/band name list for all albums
    if(!this.props.albums) {
      albumsList = ["loading..."];
    } else {
      let albums = this.props.albums;
      let that = this;
      albumsList = albums.map( (album) => {
        return (
          <Link to={`/artists/${album.artist_id}/albums/${album.id}`}>
          <li className="album-photo-list-item" key={album.id}>
            <div className="album-photo-container">
              <img src={album.photo_url} />
              <p>{album.name}</p>
            </div>
          </li>
          </Link>
        )
        
      })
    }
    
    return (
      <div>
        <div id="main-content">

          <div id="banner-image-container-outer">
            <div id="banner-image-container-inner">
              <img src={banner_img} alt="" />
            </div>
          </div>
          
          <div id="artist-main-columns-container-outer">
            <div id="artist-main-columns-container-inner">

              <div id="left-middle-columns">
                <ul className="album-photo-list">{albumsList}</ul><br />
                {/* <ul>{trackList}</ul> */}
              </div>

              <div id="right-column">
                <div className="artist-photo-container">
                  <img src={artist_img} />
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

export default ArtistShow;