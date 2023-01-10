class ApplicantionSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :jobseeker_id, :date_applied
end
