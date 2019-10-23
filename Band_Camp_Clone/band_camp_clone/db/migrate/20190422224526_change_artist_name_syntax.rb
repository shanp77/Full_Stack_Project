class ChangeArtistNameSyntax < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :artist_name, :artistname
  end
end
