class JobRequirementSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :requirements
  belongs_to :job
end
