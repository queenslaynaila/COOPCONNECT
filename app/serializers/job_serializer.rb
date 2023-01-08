class JobSerializer < ActiveModel::Serializer
  attributes :id, :company_id, :category_id, :job_title, :skill_required, :role, :job_location, :job_description, :position_availabale, :application_deadline, :salary_range, :job_details, :posted_on
end
