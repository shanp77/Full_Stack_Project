class Track < ApplicationRecord
  validates :title, :album_id, :ord, presence: true
  validates :ord, uniqueness: true
  belongs_to :album,
    class_name: :Album,
    foreign_key: :album_id

  has_one :artist,
    through: :album,
    source: :artist

end
