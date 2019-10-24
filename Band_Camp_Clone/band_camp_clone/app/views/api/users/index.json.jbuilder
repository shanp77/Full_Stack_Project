
  @artists.each do |artist| 
    json.set! artist.id do
      json.extract! artist, :id, :artistname
      json.albums do
        artist.albums.each do |album|
          json.set! album.id do
            json.extract! album, :id, :name
            json.cover_photo url_for(album.cover_photo) if album.cover_photo.attached?
          end
        end
      end
      json.artist_img url_for(artist.artist_img) if artist.artist_img.attached?
      json.banner_img url_for(artist.banner_img) if artist.banner_img.attached?
    end
  end