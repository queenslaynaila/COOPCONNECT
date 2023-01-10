class Question < ApplicationRecord
    belongs_to :survey
    has_one :answer
    has_many :answer_choices

end
