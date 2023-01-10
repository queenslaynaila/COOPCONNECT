class SurveyPropmtsController < ApplicationController
    before_action :set_surveyprompt, only: [:show, :edit, :update, :destroy]

  def index
    @surveyprompts = Surveyprompt.all
  end

  def show
  end

  def new
    @surveyprompt = Surveyprompt.new
  end

  def edit
  end
  def create
    @surveyprompt = Surveyprompt.new(surveyprompt_params)

    if @surveyprompt.save
      redirect_to @surveyprompt, notice: 'Survey prompt was successfully created.'
    else
      render :new
    end
  end

  def update
    if @surveyprompt.update(surveyprompt_params)
      redirect_to @surveyprompt, notice: 'Survey prompt was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @surveyprompt.destroy
    redirect_to surveyprompts_url, notice: 'Survey prompt was successfully destroyed.'
  end
  private
    def set_surveyprompt
      @surveyprompt = Surveyprompt.find(params[:id])
    end
    
    def surveyprompt_params
        params.require(:surveyprompt).permit(:answerchoice, :question_id)
    end
end
