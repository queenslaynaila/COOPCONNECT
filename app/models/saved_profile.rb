class SavedProfile < ApplicationRecord
    belongs_to :company
    belongs_to :seeker
    
end
