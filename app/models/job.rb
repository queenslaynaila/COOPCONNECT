class Job < ApplicationRecord
  belongs_to :company
  belongs_to :job_category

  has_many :job_skillsets
  has_many :job_requirements
  has_many :applications
end
