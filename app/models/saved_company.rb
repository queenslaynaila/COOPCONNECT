class SavedCompany < ApplicationRecord
    belongs_to :company
    belongs_to :jobseeker
end
