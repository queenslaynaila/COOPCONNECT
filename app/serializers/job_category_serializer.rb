class JobCategorySerializer < ActiveModel::Serializer
  attributes :id, :categoryname
  has_many :jobs
end
