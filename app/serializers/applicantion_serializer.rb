class ApplicantionSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :jobseeker_id, :dateapplied
  belongs_to :job
  belongs_to :jobseeker
end
