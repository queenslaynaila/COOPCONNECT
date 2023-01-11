class Question < ApplicationRecord
    belongs_to :survey
    has_many :survey_prompts
    has_one :answer

end
