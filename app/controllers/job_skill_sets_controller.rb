class JobSkillSetsController < ApplicationController
    before_action :set_jobskillset, only: [:show, :edit, :update, :destroy]

  def index
    @jobskillsets = Jobskillset.all
  end

  def show
  end

  def new
    @jobskillset = Jobskillset.new
  end

  def edit
  end
  def create
    @jobskillset = Jobskillset.new(jobskillset_params)

    if @jobskillset.save
      redirect_to @jobskillset, notice: 'Jobskillset was successfully created.'
    else
      render :new
    end
  end

  def update
    if @jobskillset.update(jobskillset_params)
      redirect_to @jobskillset, notice: 'Jobskillset was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @jobskillset.destroy
    redirect_to jobskillsets_url, notice: 'Jobskillset was successfully destroyed.'
  end
  private
    def set_jobskillset
      @jobskillset = Jobskillset.find(params[:id])
    end

    def jobskillset_params
      params.require(:jobskillset).permit(:job_id, :skill_description)
    end
end
