class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
     
      log_in(@user)
      render :show
    else
      
      render json: @user.errors.full_messages, status: 401
    end

  end

  def index
    @artists = User.all

    if @artists
      
      render :index
    end

  end

  def show
    @user = User.find(params[:id])

    if @user
      render :show
    end

  end

  def destroy
    @user = User.find(params[:id])

    if @user
      @user.destroy
    end
  end

  private
  def user_params
    params.require(:user).permit(:artistname, :username, :password, :email)
  end
end
