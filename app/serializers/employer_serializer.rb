class EmployerSerializer < ActiveModel::Serializer
  attributes :id, :employer_name, :contact_person_firstname, :contact_person_lastname, :contact_person_email, :password_digest
end
