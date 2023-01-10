class UserAccountsController < ApplicationController
  before_action :set_user_account, only: [:show, :edit, :update, :destroy]
  def login
    user_account = UserAccount.authenticate(params[:email],params[:password])
    if user_account
        session[:user_account_id] = user_account.id
        redirect_to root_path, notice: "Logged in successfully"
    else
        flash.now[:alert] = "Invalid email/password combination"
        render :new
    end
  end

  def logout
    session[:user_account_id] = nil
    redirect_to root_path, notice: "Logged out successfully"
  end

  def index
    @user_accounts = UserAccount.all
  end

  def show
  end

  def new
    @user_account = UserAccount.new
  end

  def edit
  end

  def create
    @user_account = UserAccount.new(user_account_params)

    if @user_account.save
      redirect_to @user_account, notice: 'User account was successfully created.'
    else
      render :new
    end
  end

  def update
    if @user_account.update(user_account_params)
      redirect_to @user_account, notice: 'User account was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @user_account.destroy
    redirect_to user_accounts_url, notice: 'User account was successfully destroyed.'
  end

  private
    def set_user_account
      @user_account = UserAccount.find(params[:id])
    end

    def user_account_params
      params.require(:user_account).permit(:user_type_id, :email, :password, :password_confirmation, :registration_date)
    end
end
