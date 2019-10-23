json.extract! @album, :id, :name, :release_date, :artist_id
@album.cover_photo.attached?