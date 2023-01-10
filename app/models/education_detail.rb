class EducationDetail < ApplicationRecord

    belong_to :jobseeker

    validates :education_level, acceptance: { accept: ['highschool', 'cert', 'diploma', 'masters', 'phd'] }
end
