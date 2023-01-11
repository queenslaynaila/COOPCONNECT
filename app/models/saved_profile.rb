class SavedProfile < ApplicationRecord
    belongs_to :company
    belongs_to :jobseeker
    
end
