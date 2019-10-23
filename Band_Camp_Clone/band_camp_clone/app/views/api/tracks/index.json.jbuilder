@tracks.each do |track|
  json.set! track.id do 
    json.extract! track, :id, :title, :ord, 
    json.song_url @album.song_url.attached?
  end
end


