class Album < ApplicationRecord
  validates :name, :artist_id, :release_date, presence: true
  validates :name, uniqueness: true

  belongs_to :artist,
    class_name: :User,
    foreign_key: :artist_id

  has_many :tracks,
    class_name: :Track,
    foreign_key: :album_id

  has_one_attached :cover_photo
end
