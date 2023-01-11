class ApplicationController < ActionController::API
  before_action :require_login

  def require_login
    unless logged_in?
      flash[:danger] = 'You must be logged in to access this section'
      redirect_to login_path # halts request cycle
    end
  end

  def logged_in?
    !!session[:user_account_id]
  end

  def current_user
    @current_user ||= UserAccount.find(session[:user_account_id]) if session[:user_account_id]
  end
  helper_method :current_user
end
