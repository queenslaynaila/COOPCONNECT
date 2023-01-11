class SavedJobsController < ApplicationController
    before_action :set_savedjob, only: [:show, :edit, :update, :destroy]

  def index
    @savedjobs = Savedjob.all
  end

  def show
  end

  def new
    @savedjob = Savedjob.new
  end

  def edit
  end
  def create
    @savedjob = Savedjob.new(savedjob_params)

    if @savedjob.save
      redirect_to @savedjob, notice: 'Saved job was successfully created.'
    else
      render :new
    end
  end

  def update
    if @savedjob.update(savedjob_params)
      redirect_to @savedjob, notice: 'Saved job was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @savedjob.destroy
    redirect_to savedjobs_url, notice: 'Saved job was successfully destroyed.'
  end
  private
    def set_savedjob
      @savedjob = Savedjob.find(params[:id])
    end

    def savedjob_params
      params.require(:savedjob).permit(:job_id, :jobseeker_id)
    end
end
