class JobseekerSerializer < ActiveModel::Serializer
  attributes :id, :user_account_id, :firstname, :lastname, :phone_number, :prefered_contact_menthod, :about, :experience
end
