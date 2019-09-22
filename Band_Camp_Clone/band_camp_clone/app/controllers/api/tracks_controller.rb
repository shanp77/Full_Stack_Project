class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages
    end

  end

  def index
    @tracks = User.find(params[:user_id]).tracks
    
    if @tracks
      render :index
    else
      render json: ["error occurred trying to find tracks for this album"], status: 401
    end
  end

  def show
    @track = Track.find(params[:id])
    
    if @track
      render :show
    else
      render json: ["error: couldn't find track"], status: 401
    end

  end

  private
  def track_params
    params.require(:track).permit(:title, :ord, :album_id, :lyrics)
  end
end
