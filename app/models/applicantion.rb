class Applicantion < ApplicationRecord
    belongs_to :job
    belongs_to :jobseeker
    belongs_to :seeker
end
