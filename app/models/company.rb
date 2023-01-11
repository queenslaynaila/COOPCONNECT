class Company < ApplicationRecord
    belongs_to :user_account
  has_many :jobs
  has_many :surveys
  has_many :saved_profiles

end
