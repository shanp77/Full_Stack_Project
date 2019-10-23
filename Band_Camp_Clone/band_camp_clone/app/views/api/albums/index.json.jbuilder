@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :name, :release_date, :artist_id
        json.cover_photo url_for(album.cover_photo)
    end
end