class Jobseeker < ApplicationRecord
    belongs_to :user_account
  has_many :education_details
  has_many :experiences
  has_many :seekerskills
  has_many :applications
  has_many :saved_jobs

  validates :preferred_contact_method, inclusion: { in: %w(email phone) }
  validates :experience, inclusion: { in: %w(entry-level intermediate mid-level senior executive-level) }
end
 