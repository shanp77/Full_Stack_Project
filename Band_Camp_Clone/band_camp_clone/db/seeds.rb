# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

# demo user
User.create!(username: "shane", artistname: "shane's band", email: "shane@aol.com", password: "password")

# Judy Wexler
#######
user = User.create!(username: "judy", artistname: "Judy Wexler", email: "judy@aol.com", password: "password")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/judy_wexler-imgs/judy_wexler.jpg")
file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/judy_wexler-imgs/judy_wexler-banner_img.jpg")
user.banner_img.attach(io: file2, filename: "judy_wexler-banner_img.jpg")
user.artist_img.attach(io: file, filename: "judy_wexler.jpg")

#######
album = Album.create(name: "What I See", artist_id: user.id, release_date: "2015-09-13")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/Judy_Wexler_What-I-See/judywexler_whatisee.jpg")
album=Album.find_by(name: "What I See")
album.cover_photo.attach(io: file, filename: "judywexler_whatisee.jpg") 

Track.create(title: "The Moon is Made of Gold", album_id: album.id, ord: 1, length: 195)
Track.create(title: "The Long Goodbye", album_id: album.id, ord: 2, length: 311)
Track.create(title: "A Kiss to Build a Dream On", album_id: album.id, ord: 3, length: 201)

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/Judy_Wexler_What-I-See/the-moon-is-made-of-gold.mp3")
track = Track.find_by(title: "The Moon is Made of Gold")
track.song_url.attach(io: file, filename: "the-moon-is-made-of-gold.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/Judy_Wexler_What-I-See/the-long-goodbye.mp3")
track = Track.find_by(title: "The Long Goodbye")
track.song_url.attach(io: file, filename: "the-long-goodbye.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/Judy_Wexler_What-I-See/a-kiss-to-build-a-dream-on.mp3")
track = Track.find_by(title: "A Kiss to Build a Dream On")
track.song_url.attach(io: file, filename: "a-kiss-to-build-a-dream-on.mp3")

#######
Album.create(name: "Under a Painted Sky", artist_id: user.id, release_date: "2011-01-01")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/judy_wexler_under-a-painted-sky/judy_wexler-under_a_painted_sky.jpg")
album=Album.find_by(name: "Under a Painted Sky")
album.cover_photo.attach(io: file, filename: "judy_wexler-under_a_painted_sky.jpg") 

Track.create(title: "A Little Tear", album_id: album.id, ord: 1, length: 239)
Track.create(title: "And How I Hoped For Your Love", album_id: album.id, ord: 2, length: 278)
Track.create(title: "An Occasional Man", album_id: album.id, ord: 3, length: 259)
Track.create(title: "Cafe", album_id: album.id, ord: 4, length: 285)

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/judy_wexler_under-a-painted-sky/a-little-tear.mp3")
track = Track.find_by(title: "A Little Tear")
track.song_url.attach(io: file, filename: "a-little-tear.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/judy_wexler_under-a-painted-sky/and-how-i-hoped-for-your-love.mp3")
track = Track.find_by(title: "And How I Hoped For Your Love")
track.song_url.attach(io: file, filename: "and-how-i-hoped-for-your-love.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/judy_wexler_under-a-painted-sky/an-occasioanl-man.mp3")
track = Track.find_by(title: "An Occasional Man")
track.song_url.attach(io: file, filename: "an-occasioanl-man.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/judy_wexler_under-a-painted-sky/cafe.mp3")
track = Track.find_by(title: "Cafe")
track.song_url.attach(io: file, filename: "cafe.mp3")


#John Raymond
#######
user = User.create!(username: "john", artistname: "John Raymond", email: "john@aol.com", password: "password")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/john_raymond-the_john_raymond_project/john_raymond.jpg")
file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/john_raymond-the_john_raymond_project/john_raymond-banner_img.jpeg")
user.banner_img.attach(io: file2, filename: "john_raymond-banner_img.jpeg")
user.artist_img.attach(io: file, filename: "john_raymond.jpg")

#######
Album.create(name: "The John Raymond Project", artist_id: user.id, release_date: "2011-01-01")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/john_raymond-the_john_raymond_project/the_john_raymond_project.jpg")
album=Album.find_by(name: "The John Raymond Project")
album.cover_photo.attach(io: file, filename: "the_john_raymond_project.jpg") 

Track.create(title: "Work it Out", album_id: album.id, ord: 1, length: 356)
Track.create(title: "Dani's Theme", album_id: album.id, ord: 2, length: 394)
Track.create(title: "All the Things You Are", album_id: album.id, ord: 4, length: 350)

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/john_raymond-the_john_raymond_project/work_it_out.mp3")
track = Track.find_by(title: "Work it Out")
track.song_url.attach(io: file, filename: "work_it_out.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/john_raymond-the_john_raymond_project/danis_theme.mp3")
track = Track.find_by(title: "Dani's Theme")
track.song_url.attach(io: file, filename: "danis_theme.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/john_raymond-the_john_raymond_project/all_the_things_you_are.mp3")
track = Track.find_by(title: "All the Things You Are")
track.song_url.attach(io: file, filename: "all_the_things_you_are.mp3")


#Project 86
#######
user = User.create!(username: "project86", artistname: "Project 86", email: "project@aol.com", password: "password")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-imgs/project_86.jpeg")
file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-imgs/project_86-banner_img.jpg")
user.artist_img.attach(io: file, filename: "project_86.jpeg")
user.banner_img.attach(io: file2, filename: "project_86-banner_img.jpg")

#######
album = Album.create(name: "Knives to the Future", artist_id: user.id, release_date: "2011-01-01")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-knives_to_the_future/knives.jpg")
album.cover_photo.attach(io: file, filename: "knives.jpg") 

Track.create(title: "Firefly Without a Night", album_id: album.id, ord: 1, length: 195)
Track.create(title: "In Trenches", album_id: album.id, ord: 2, length: 182)
Track.create(title: "Nocturnal Gaze", album_id: album.id, ord: 3, length: 184)
Track.create(title: "Transposeur", album_id: album.id, ord: 4, length: 183)

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-knives_to_the_future/firefly-without-a-night.mp3")
track = Track.find_by(title: "Firefly Without a Night")
track.song_url.attach(io: file, filename: "firefly-without-a-night.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-knives_to_the_future/in-trenches.mp3")
track = Track.find_by(title: "In Trenches")
track.song_url.attach(io: file, filename: "in-trenches.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-knives_to_the_future/nocturnal-gaze.mp3")
track = Track.find_by(title: "Nocturnal Gaze")
track.song_url.attach(io: file, filename: "nocturnal-gaze.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-knives_to_the_future/transposeur.mp3")
track = Track.find_by(title: "Transposeur")
track.song_url.attach(io: file, filename: "transposeur.mp3")

#######
album = Album.create(name: "Omertas Sons", artist_id: user.id, release_date: "2011-01-01")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-omertas_sons/omertas_sons.jpg")
album.cover_photo.attach(io: file, filename: "omertas_sons.jpg") 

Track.create(title: "Destroyer", album_id: album.id, ord: 1, length: 288)
Track.create(title: "Omertas Sons", album_id: album.id, ord: 2, length: 215)
Track.create(title: "The Butcher", album_id: album.id, ord: 3, length: 182)
Track.create(title: "Dark Angel Dragnet", album_id: album.id, ord: 4, length: 203)

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-omertas_sons/02_destroyer_1.mp3")
track = Track.find_by(title: "Destroyer")
track.song_url.attach(io: file, filename: "02_destroyer_1.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-omertas_sons/03_omertas_sons.mp3")
track = Track.find_by(title: "Omertas Sons")
track.song_url.attach(io: file, filename: "03_omertas_sons.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-omertas_sons/03_the_butcher_1.mp3")
track = Track.find_by(title: "The Butcher")
track.song_url.attach(io: file, filename: "03_the_butcher_1.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/project_86-omertas_sons/04_dark_angel_dragnet_1.mp3")
track = Track.find_by(title: "Dark Angel Dragnet")
track.song_url.attach(io: file, filename: "04_dark_angel_dragnet_1.mp3")


#Edward Simon
#######
user = User.create!(username: "edward", artistname: "Edward Simon", email: "edward@aol.com", password: "password")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/edward_simon-imgs/edward_simon.jpeg")
file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/edward_simon-imgs/edward_simon-banner_img.jpg")
user.artist_img.attach(io: file, filename: "edward_simon.jpeg")
user.banner_img.attach(io: file2, filename: "edward_simon-banner_img.jpg")

#######
album = Album.create(name: "Latin American Songbook", artist_id: user.id, release_date: "2011-01-01")
file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/edward_simon-latin_american_songbook/edwardsimoncover3.jpg")
album.cover_photo.attach(io: file, filename: "edwardsimoncover3.jpg") 

Track.create(title: "Libertango", album_id: album.id, ord: 1, length: 395)
Track.create(title: "Gracias a La Vida", album_id: album.id, ord: 2, length: 453)


file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/edward_simon-latin_american_songbook/libertango.mp3")
track = Track.find_by(title: "Libertango")
track.song_url.attach(io: file, filename: "libertango.mp3")

file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/edward_simon-latin_american_songbook/gracias-a-la-vida.mp3")
track = Track.find_by(title: "Gracias a La Vida")
track.song_url.attach(io: file, filename: "gracias-a-la-vida.mp3")















# user = User.create!(username: "hornet", artistname: "The Hornets", email: "hornet@aol.com", password: "password")
# #file = File.open("/home/shannon/Pictures/rhythm_kings_1.jpg")
# file2 = open("https://band-land-seeds.s3.us-west-1.amazonaws.com/the_hornets-artist_img.jpg")
# #user.banner_img.attach(io: file, filename: "rhythm_kings_1.jpg")
# user.artist_img.attach(io: file2, filename: "the_hornets-artist_img.jpg")

# user = User.create(username: "sally", artistname: "San Francisco", email: "sanfran@aol.com", password: "password")
# #file = File.open("/home/shannon/Pictures/rhythm_kings_1.jpg")
# file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/san_francisco-artist_img.jpg")
# #user.banner_img.attach(io: file, filename: "rhythm_kings_1.jpg")
# user.artist_img.attach(io: file2, filename: "san_francisco-artist_img.jpg")

# user = User.create(username: "rocker", artistname: "The Rockers", email: "rock@aol.com", password: "password")
# #file = File.open("/home/shannon/Pictures/rhythm_kings_1.jpg")
# file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/the_rockers-artist-img.png")
# #user.banner_img.attach(io: file, filename: "rhythm_kings_1.jpg")
# user.artist_img.attach(io: file2, filename: "the_rockers-artist-img.png")

# user = User.create(username: "shane", artistname: "Rhythm Kings", email: "jazz1@aol.com", password: "password")
# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-banner_img.jpg")
# file2 = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-artist_img.jpg")
# user.banner_img.attach(io: file, filename: "rhythm_kings-banner_img.jpg")
# user.artist_img.attach(io: file2, filename: "rhythm_kings-artist_img.jpg")

# # #Rhythm Kings
# album = Album.create(name: "Groovin", artist_id: 4, release_date: "2017-06-05")
# Album.create(name: "Just for a Thrill", artist_id: 4, release_date: "2018-07-05")
# Album.create(name: "Struttin Our Stuff", artist_id: 4, release_date: "2014-02-05")
# Album.create(name: "Studio Time", artist_id: 4, release_date: "2013-12-05")

# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-groovin.jpg")
# album=Album.find_by(name: "Groovin")
# album.cover_photo.attach(io: file, filename: "rhythm_kings-groovin.jpg") 

# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-studio_time.jpg")
# album=Album.find_by(name: "Studio Time")
# album.cover_photo.attach(io: file, filename: "rhythm_kings-studio_time.jpg") 

# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-just_for_a_thrill.jpg")
# album=Album.find_by(name: "Just for a Thrill")
# album.cover_photo.attach(io: file, filename: "rhythm_kings-just_for_a_thrill.jpg")

# #AWS downloaded picture
# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/rhythm_kings-struttin.jpg")
# album=Album.find_by(name: "Struttin Our Stuff")
# album.cover_photo.attach(io: file, filename: "rhythm_kings-just_for_a_thrill.jpg")

#Tracks
# Track.create(title: "Tell You a Secret", album_id: 1, ord: 1, length: 185)
# Track.create(title: "Groovin'", album_id: 1, ord: 2, length: 211)
# Track.create(title: "Rough Cut Diamond", album_id: 1, ord: 3, length: 226)
# Track.create(title: "Mood Swing", album_id: 1, ord: 4, length: 230)
# Track.create(title: "Hole in the Wall", album_id: 1, ord: 5)
# Track.create(title: "Can't Get My Rest at Night", album_id: 1, ord: 6)

# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/bensound-anewbeginning.mp3")
# track = Track.find_by(title: "Tell You a Secret")
# track.song_url.attach(io: file, filename: "bensound-anewbeginning.mp3")

# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/bensound-cute.mp3")
# track = Track.find_by(title: "Groovin'")
# track.song_url.attach(io: file, filename: "bensound-cute.mp3")

# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/bensound-creativeminds.mp3")
# track = Track.find_by(title: "Rough Cut Diamond")
# track.song_url.attach(io: file, filename: "bensound-creativeminds.mp3")

# file = open("https://band-land-seeds.s3-us-west-1.amazonaws.com/bensound-summer.mp3")
# track = Track.find_by(title: "Mood Swing")
# track.song_url.attach(io: file, filename: "bensound-summer.mp3")

