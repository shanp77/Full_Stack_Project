class CreateAlbumTags < ActiveRecord::Migration[5.2]
  def change
    create_table :album_tags do |t|
      t.integer :album_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end
    add_index :album_tags, [:album_id, :tag_id], unique: true
  end
end
