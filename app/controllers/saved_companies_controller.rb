class SavedCompaniesController < ApplicationController
    before_action :set_savedcompany, only: [:show, :edit, :update, :destroy]

  def index
    @savedcompanies = Savedcompany.all
  end

  def show
  end

  def new
    @savedcompany = Savedcompany.new
  end

  def edit
  end
  def create
    @savedcompany = Savedcompany.new(savedcompany_params)

    if @savedcompany.save
      redirect_to @savedcompany, notice: 'Saved company was successfully created.'
    else
      render :new
    end
  end

  def update
    if @savedcompany.update(savedcompany_params)
      redirect_to @savedcompany, notice: 'Saved company was successfully updated.'
    else
      render :edit
    end
  end
  def destroy
    @savedcompany.destroy
    redirect_to savedcompanies_url, notice: 'Saved company was successfully destroyed.'
  end

  private
    def set_savedcompany
      @savedcompany = Savedcompany.find(params[:id])
    end

    def savedcompany_params
      params.require(:savedcompany).permit(:company_id, :seekerid)
    end
end
