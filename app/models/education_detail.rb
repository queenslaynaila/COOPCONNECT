class EducationDetail < ApplicationRecord

    belong_to :jobseeker

    validates :education_level, inclusion: { in: %w(high_school cert diploma masters phd) }
end
