class ApplicantionsController < ApplicationController::API
  before_action :set_application, only: [:show, :edit, :update, :destroy]

  def index
    @applications = Application.all
  end

  def show
  end

  def new
    @application = Application.new
  end

  def edit
  end
  def create
    @application = Application.new(application_params)

    if @application.save
      redirect_to @application, notice: 'Application was successfully created.'
    else
      render :new
    end
  end

  def update
    if @application.update(application_params)
      redirect_to @application, notice: 'Application was successfully updated.'
    else
      render :edit
    end
  end
  def destroy
    @application.destroy
    redirect_to applications_url, notice: 'Application was successfully destroyed.'
  end

  private
    def set_application
      @application = Application.find(params[:id])
    end

    def application_params
      params.require(:application).permit(:job_id, :jobseeker_id, :dateapplied)
    end
end
