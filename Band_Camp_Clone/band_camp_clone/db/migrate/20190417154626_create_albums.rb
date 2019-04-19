class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.integer :artist_id, null: false
      t.date :release_date, null: false
      t.string :cover_art
      t.timestamps
    end
      add_index :albums, [:name, :artist_id], unique: true
  end
end
