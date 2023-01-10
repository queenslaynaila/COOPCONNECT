class JobSerializer < ActiveModel::Serializer
  attributes :id, :jobtitle, :jobdescription, :positionavailabale, :application_deadline, :salaryrange, :joblocation, :skillrequired
  has_many :company
  has_many :category
end
