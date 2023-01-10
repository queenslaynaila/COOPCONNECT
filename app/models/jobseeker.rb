class Jobseeker < ApplicationRecord
    

    has_one :user_account

    has_many :applicatuons
    has_many :education_details
    has_many :experiences
    has_many :skills
    has_many :jobs

    validates :prefered_contact_menthod, acceptance: { :phone_number, :email }

    validates :experience, acceptance: { accept: ['Entry-level', 'Intermediate.Mid-level', 'Senior-level', 'Executive-level'] }
end
 