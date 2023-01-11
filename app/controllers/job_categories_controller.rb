class JobCategoriesController < ApplicationController
    before_action :set_jobcategory, only: [:show, :edit, :update, :destroy]

  def index
    @jobcategories = Jobcategory.all
  end

  def show
  end

  def new
    @jobcategory = Jobcategory.new
  end

  def edit
  end
  def create
    @jobcategory = Jobcategory.new(jobcategory_params)

    if @jobcategory.save
      redirect_to @jobcategory, notice: 'Job category was successfully created.'
    else
      render :new
    end
  end

  def update
    if @jobcategory.update(jobcategory_params)
      redirect_to @jobcategory, notice: 'Job category was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @jobcategory.destroy
    redirect_to jobcategories_url, notice: 'Job category was successfully destroyed.'
  end

  private
    def set_jobcategory
      @jobcategory = Jobcategory.find(params[:id])
    end
    def jobcategory_params
        params.require(:jobcategory).permit(:categoryname)
    end
end
