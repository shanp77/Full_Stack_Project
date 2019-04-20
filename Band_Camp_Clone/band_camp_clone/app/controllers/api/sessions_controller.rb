class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

    if @user
      log_in(@user)
      render :show
    else
      render json: ["login failed: bad username/password combo"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
    
      log_out
      render json: {message:"logout success"}
    else
      render json: ["no current user to logout"], status: 401
    end
    
  end

  private
  def session_params
    params.require(:user).permit(:username, :password)
  end
end
