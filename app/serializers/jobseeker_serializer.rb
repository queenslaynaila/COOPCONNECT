class JobseekerSerializer < ActiveModel::Serializer
  attributes :id, :user_account_id, :firstname, :lastname, :phonenumber, :preferredcontactmethod, :about, :experience
  has_many :educationdetail
  has_many :experience
  has_many :seekerskill
end
