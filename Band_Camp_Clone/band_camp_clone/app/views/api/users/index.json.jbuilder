
  @artists.each do |artist| 
    json.set! artist.id do
      json.extract! artist, :id, :artistname
      json.artist_img url_for(artist.artist_img) if artist.artist_img.attached?
      json.banner_img url_for(artist.banner_img) if artist.banner_img.attached?
    end
  end