class SavedProfilesController < ApplicationController
    before_action :set_savedprofile, only: [:show, :edit, :update, :destroy]

  def index
    @savedprofiles = Savedprofile.all
  end

  def show
  end

  def new
    @savedprofile = Savedprofile.new
  end

  def edit
  end

  def create
    @savedprofile = Savedprofile.new(savedprofile_params)

    if @savedprofile.save
      redirect_to @savedprofile, notice: 'Saved profile was successfully created.'
    else
      render :new
    end
  end
  def update
    if @savedprofile.update(savedprofile_params)
      redirect_to @savedprofile, notice: 'Saved profile was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @savedprofile.destroy
    redirect_to savedprofiles_url, notice: 'Saved profile was successfully destroyed.'
  end

  private
    def set_savedprofile
      @savedprofile = Savedprofile.find(params[:id])
    end

    def savedprofile_params
      params.require(:savedprofile).permit(:company_id, :jobseeker_id)
    end
end
