class AddNullFalseToArtistName < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :artist_name, false
  end
end
