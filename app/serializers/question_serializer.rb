class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_text
  belongs_to :survey
  has_many :surveyprompts
  has_many :answers
end
