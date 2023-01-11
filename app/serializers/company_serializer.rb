class CompanySerializer < ActiveModel::Serializer
  attributes :id, :user_account_id, :companyname, :contactpersonfname, :contactpersonsname, :profiledescription, :dateestablished, :websiteurl, :phonenumber
  has_many :jobs
end
