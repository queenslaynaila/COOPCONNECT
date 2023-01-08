class UserAccount < ApplicationRecord
    belongs_to :jobseeker
    belongs_to :company
end
