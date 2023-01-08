class SkeerSkill < ApplicationRecord
    belongs_to :jobseeker
    belongs_to :job
    has_many :applicantions
end
