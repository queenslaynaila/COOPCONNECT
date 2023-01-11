class SavedJob < ApplicationRecord
    belongs_to :job
    belongs_to :jobseeker
    # belongs_to :company
    # belongs_to :seeker
end
