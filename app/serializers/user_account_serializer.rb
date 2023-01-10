class UserAccountSerializer < ActiveModel::Serializer
  attributes :id, :"id,", :user_type_id, :email, :password_digest, :registration_date
end
