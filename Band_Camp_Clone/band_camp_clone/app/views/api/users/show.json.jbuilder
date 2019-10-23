json.users do
  json.set! @user.id do 
    json.extract! @user, :id, :username, :email, :artistname
    json.banner_img url_for(@user.banner_img) if @user.banner_img.attached?
    json.artist_img url_for(@user.artist_img) if @user.artist_img.attached?
  end
end
json.albums do
  @user.albums.each do |album|
    json.set! album.id do 
      json.extract! album, :id, :name, :release_date, :artist_id
      json.photo_url url_for(album.cover_photo) if album.cover_photo.attached?
    end
  end
end
json.tracks do
  @user.tracks.each do |track|
    json.set! track.id do 
      json.extract! track, :id, :title, :ord, :album_id, :length
      json.song_url url_for(track.song_url) if track.song_url.attached?
    end
  end
end
json.session do
      json.extract! @user, :id
end
