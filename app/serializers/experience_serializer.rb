class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :jobseeker_id, :startdate, :enddate, :job_title, :company_name, :job_description
end
