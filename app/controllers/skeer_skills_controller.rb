class SkeerSkillsController < ApplicationController
    before_action :set_seekerskill, only: [:show, :edit, :update, :destroy]

  def index
    @seekerskills = Seekerskill.all
  end

  def show
  end

  def new
    @seekerskill = Seekerskill.new
  end

  def edit
  end
  def create
    @seekerskill = Seekerskill.new(seekerskill_params)

    if @seekerskill.save
      redirect_to @seekerskill, notice: 'Seekerskill was successfully created.'
    else
      render :new
    end
  end

  def update
    if @seekerskill.update(seekerskill_params)
      redirect_to @seekerskill, notice: 'Seekerskill was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @seekerskill.destroy
    redirect_to seekerskills_url, notice: 'Seekerskill was successfully destroyed.'
  end

  private
    def set_seekerskill
      @seekerskill = Seekerskill.find(params[:id])
    end

    def seekerskill_params
      params.require(:seekerskill).permit(:jobseeker_id, :skillname)
    end
end
