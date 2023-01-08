class Company < ApplicationRecord
    has_one :user_account
    has_many :jobs
    has_many :surveys

end
