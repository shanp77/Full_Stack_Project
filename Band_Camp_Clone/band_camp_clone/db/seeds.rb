# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

#users 
user = User.create!(username: "hornet", artistname: "The Hornets", email: "hornet@aol.com", password: "password")
#file = File.open("/home/shannon/Pictures/rhythm_kings_1.jpg")
file2 = open("https://band-land-seeds.s3.us-west-1.amazonaws.com/the_hornets-artist_img.jpg")
#user.banner_img.attach(io: file, filename: "rhythm_kings_1.jpg")
user.artist_img.attach(io: file2, filename: "the_hornets-artist_img.jpg")

user = User.create(username: "sally", artistname: "San Francisco", email: "sanfran@aol.com", password: "password")
#file = File.open("/home/shannon/Pictures/rhythm_kings_1.jpg")
file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/san_francisco-artist_img.jpg")
#user.banner_img.attach(io: file, filename: "rhythm_kings_1.jpg")
user.artist_img.attach(io: file2, filename: "san_francisco-artist_img.jpg")

user = User.create(username: "rocker", artistname: "The Rockers", email: "rock@aol.com", password: "password")
#file = File.open("/home/shannon/Pictures/rhythm_kings_1.jpg")
file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/the_rockers-artist-img.png")
#user.banner_img.attach(io: file, filename: "rhythm_kings_1.jpg")
user.artist_img.attach(io: file2, filename: "the_rockers-artist-img.png")

user = User.create(username: "shane", artistname: "Rhythm Kings", email: "jazz1@aol.com", password: "password")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-banner_img.jpg")
file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-artist_img.jpg")
user.banner_img.attach(io: file, filename: "rhythm_kings-banner_img.jpg")
user.artist_img.attach(io: file2, filename: "rhythm_kings-artist_img.jpg")

User.create(username: "bob", artistname: "Bob Crooner", email: "bob@aol.com", password: "password")
User.create(username: "george", artistname: "The Jazzers", email: "jazz@aol.com", password: "password")


# #albums
# album = Album.create(name: "Flyin", artist_id: 4, release_date: "2017-06-05")
# file = File.open("/home/shannon/Pictures/banner2.jpg")
# album.cover_photo.attach(io: file, filename: "banner2.jpg")
# album = Album.create(name: "Coastin", artist_id: 4, release_date: "2018-07-05")
# file = File.open("/home/shannon/Pictures/banner2.jpg")
# album.cover_photo.attach(io: file, filename: "banner2.jpg")
# Album.create(name: "Glidin", artist_id: 4, release_date: "2014-02-05")
# Album.create(name: "Shufflin", artist_id: 4, release_date: "2013-12-05")
# Album.create(name: "Slidin", artist_id: 4, release_date: "2012-11-05")

# # # #sally albums
# Album.create(name: "Fog", artist_id: 5, release_date: "2015-06-05")
# Album.create(name: "Urban", artist_id: 5, release_date: "2014-06-05")
# Album.create(name: "Nee Deep in the Stoopla", artist_id: 5, release_date: "2016-06-05")
# Album.create(name: "Golden Gates", artist_id: 5, release_date: "2019-06-05")
# Album.create(name: "Hills", artist_id: 5, release_date: "2018-06-05")

# # # #The Rockers
# Album.create(name: "Rockin Times", artist_id: 6, release_date: "2017-06-05")
# Album.create(name: "Rockin On", artist_id: 6, release_date: "2018-07-05")
# Album.create(name: "The Rockers", artist_id: 6, release_date: "2014-02-05")
# Album.create(name: "Rocky Road", artist_id: 6, release_date: "2013-12-05")
# Album.create(name: "Rock Loud", artist_id: 6, release_date: "2012-11-05")

# # # #Bob Crooner
# Album.create(name: "Best of Bob", artist_id: 7, release_date: "2017-06-05")
# Album.create(name: "The Night", artist_id: 7, release_date: "2018-07-05")
# Album.create(name: "Smoke Filled Nightclubs", artist_id: 7, release_date: "2014-02-05")
# Album.create(name: "Strangers", artist_id: 7, release_date: "2013-12-05")
# Album.create(name: "Anniversary", artist_id: 7, release_date: "2012-11-05")

# #Rhythm Kings
album = Album.create(name: "Groovin", artist_id: 4, release_date: "2017-06-05")
Album.create(name: "Just for a Thrill", artist_id: 4, release_date: "2018-07-05")
Album.create(name: "Struttin Our Stuff", artist_id: 4, release_date: "2014-02-05")
Album.create(name: "Studio Time", artist_id: 4, release_date: "2013-12-05")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-groovin.jpg")
album=Album.find_by(name: "Groovin")
album.cover_photo.attach(io: file, filename: "rhythm_kings-groovin.jpg") 

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-studio_time.jpg")
album=Album.find_by(name: "Studio Time")
album.cover_photo.attach(io: file, filename: "rhythm_kings-studio_time.jpg") 

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-just_for_a_thrill.jpg")
album=Album.find_by(name: "Just for a Thrill")
album.cover_photo.attach(io: file, filename: "rhythm_kings-just_for_a_thrill.jpg")

#AWS downloaded picture
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-struttin.jpg")
album=Album.find_by(name: "Struttin Our Stuff")
album.cover_photo.attach(io: file, filename: "rhythm_kings-just_for_a_thrill.jpg")




#Tracks
Track.create(title: "Tell You a Secret", album_id: 1, ord: 1, length: 185)
Track.create(title: "Groovin'", album_id: 1, ord: 2, length: 211)
Track.create(title: "Rough Cut Diamond", album_id: 1, ord: 3, length: 226)
Track.create(title: "Mood Swing", album_id: 1, ord: 4, length: 230)
Track.create(title: "Hole in the Wall", album_id: 1, ord: 5)
Track.create(title: "Can't Get My Rest at Night", album_id: 1, ord: 6)

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/bensound-anewbeginning.mp3")
track = Track.find_by(title: "Tell You a Secret")
track.song_url.attach(io: file, filename: "bensound-anewbeginning.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/bensound-cute.mp3")
track = Track.find_by(title: "Groovin'")
track.song_url.attach(io: file, filename: "bensound-cute.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/bensound-creativeminds.mp3")
track = Track.find_by(title: "Rough Cut Diamond")
track.song_url.attach(io: file, filename: "bensound-creativeminds.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/bensound-summer.mp3")
track = Track.find_by(title: "Mood Swing")
track.song_url.attach(io: file, filename: "bensound-summer.mp3")
