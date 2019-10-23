class AddArtistNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :artist_name, :string
  end

end
