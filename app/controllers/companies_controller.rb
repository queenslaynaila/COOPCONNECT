class CompaniesController < ApplicationController
    before_action :set_company, only: [:show, :edit, :update, :destroy]

  def index
    @companies = Company.all
  end

  def show
  end

  def new
    @company = Company.new
  end

  def edit
  end
  def create
    @company = Company.new(company_params)

    if @company.save
      redirect_to @company, notice: 'Company was successfully created.'
    else
      render :new
    end
  end

  def update
    if @company.update(company_params)
      redirect_to @company, notice: 'Company was successfully updated.'
    else
      render :edit
    end
  end
  def destroy
    @company.destroy
    redirect_to companies_url, notice: 'Company was successfully destroyed.'
  end

  def save_seeker
    @savedprofile = Savedprofile.new(jobseeker_id: params[:jobseeker_id], company_id: current_user.company.id)
    if @savedprofile.save
      redirect_to jobseeker_path(params[:jobseeker_id]), notice: "Successfully Saved"
    else
      redirect_to jobseeker_path(params[:jobseeker_id]), alert: "Unable to Save"
    end
  end
  private
    def set_company
      @company = Company.find(params[:id])
    end

    def company_params
      params.require(:company).permit(:user_account_id, :companyname, :contactpersonfname, :contactpersonsname, :profiledescription, :dateestablished, :websiteurl, :phonenumber)
    end
end
