class EducationDetailsController < ApplicationController
    before_action :set_educationdetail, only: [:show, :edit, :update, :destroy]

  def index
    @educationdetails = Educationdetail.all
  end

  def show
  end

  def new
    @educationdetail = Educationdetail.new
  end

  def edit
  end

  def create
    @educationdetail = Educationdetail.new(educationdetail_params)

    if @educationdetail.save
      redirect_to @educationdetail, notice: 'Education detail was successfully created.'
    else
      render :new
    end
  end
  def update
    if @educationdetail.update(educationdetail_params)
      redirect_to @educationdetail, notice: 'Education detail was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @educationdetail.destroy
    redirect_to educationdetails_url, notice: 'Education detail was successfully destroyed.'
  end

  private
    def set_educationdetail
      @educationdetail = Educationdetail.find(params[:id])
    end

    def educationdetail_params
      params.require(:educationdetail).permit(:jobseeker_id, :educationlevel, :startdate, :enddate, :institutestudied, :institutelocation, :certificateawarded)
    end
end
