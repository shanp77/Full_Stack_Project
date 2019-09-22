class Api::AlbumsController < ApplicationController

  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 401
    end

  end

  def index
    @albums = User.find(params[:user_id]).albums
    render :index
  end

  def show
    @album = Album.find(params[:id])

    if @album
      render :show
    else
      render json: ["could not find album requested"], status: 401
    end
  end

  private
  def album_params
    params.require(:album).permit(:name, :release_date, :artist_id, :cover_photo)
  end
end
