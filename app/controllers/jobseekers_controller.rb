class JobseekersController < ApplicationController
    before_action :set_jobseeker, only: [:show, :edit, :update, :destroy]

  def index
    @jobseekers = Jobseeker.all
  end

  def show
  end

  def new
    @jobseeker = Jobseeker.new
  end

  def edit
  end

  def create
    @jobseeker = Jobseeker.new(jobseeker_params)

    if @jobseeker.save
      redirect_to @jobseeker, notice: 'Jobseeker was successfully created.'
    else
      render :new
    end
  end

  def update
    if @jobseeker.update(jobseeker_params)
      redirect_to @jobseeker, notice: 'Jobseeker was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @jobseeker.destroy
    redirect_to jobseekers_url, notice: 'Jobseeker was successfully destroyed.'
  end

  def apply_job
    @application = Application.new(job_id: params[:job_id], jobseeker_id: current_user.jobseeker.id)
    if @application.save
      redirect_to job_path(params[:job_id]), notice: "Successfully Applied"
    else
      redirect_to job_path(params[:job_id]), alert: "Unable to Apply"
    end
  end
  def save_job
    @savedjob = Savedjob.new(job_id: params[:job_id], jobseeker_id: current_user.jobseeker.id)
    if @savedjob.save
      redirect_to job_path(params[:job_id]), notice: "Successfully Saved"
    else
      redirect_to job_path(params[:job_id]), alert: "Unable to Save"
    end
end
