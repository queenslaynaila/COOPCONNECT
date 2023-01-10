class CompanySerializer < ActiveModel::Serializer
  attributes :id, :user_account_id, :company_name, :contact_person_fisrtname, :contact_person_lastname, :profile_description, :date_established, :website_url, :phone_number
end
