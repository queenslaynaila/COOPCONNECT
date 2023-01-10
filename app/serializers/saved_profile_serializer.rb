class SavedProfileSerializer < ActiveModel::Serializer
  attributes :id, :company_id, :jobseeker_id
  belongs_to :jobseeker
  belongs_to :company
end
