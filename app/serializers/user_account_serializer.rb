class UserAccountSerializer < ActiveModel::Serializer
  attributes :id, :user_type_id, :email, :password, :registrationdate
  has_many :jobseeker
  has_many :company
end
