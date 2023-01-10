class SurveyPropmtSerializer < ActiveModel::Serializer
  attributes :id, :answer_choice
  belongs_to :question
end
