class SavedJobSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :jobseeker_id
  belongs_to :job
  belongs_to :jobseeker
end
