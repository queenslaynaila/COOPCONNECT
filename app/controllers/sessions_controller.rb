class SessionsController < ApplicationController
  def create
    @user_account = UserAccount.find_by(email: params[:email])
    if @user_account&.authenticate(params[:password])
      session[:user_account_id] = @user_account.id
      redirect_to '/me'
    else
      flash[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end
  def destroy
    session.delete(:user_account_id)
    redirect_to login_path
  end
end
