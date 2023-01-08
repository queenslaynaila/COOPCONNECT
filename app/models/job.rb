class Job < ApplicationRecord
    belongs_to :company
    belongs_to :job_category
    
    has_many :skill_requirements
    has_many :applicatuons
    has_many :job_skill_sets
    has_many :job_requirements
end
