class JobRequirementsController < ApplicationController
    before_action :set_jobrequirement, only: [:show, :edit, :update, :destroy]

  def index
    @jobrequirements = Jobrequirement.all
  end

  def show
  end
  def new
    @jobrequirement = Jobrequirement.new
  end

  def edit
  end

  def create
    @jobrequirement = Jobrequirement.new(jobrequirement_params)

    if @jobrequirement.save
      redirect_to @jobrequirement, notice: 'Job requirement was successfully created.'
    else
      render :new
    end
  end

  def update
    if @jobrequirement.update(jobrequirement_params)
      redirect_to @jobrequirement, notice: 'Job requirement was successfully updated.'
    else
      render :edit
    end
  end
  def destroy
    @jobrequirement.destroy
    redirect_to jobrequirements_url, notice: 'Job requirement was successfully destroyed.'
  end

  private
    def set_jobrequirement
      @jobrequirement = Jobrequirement.find(params[:id])
    end

    def jobrequirement_params
      params.require(:jobrequirement).permit(:job_id, :requirement)
    end
end
