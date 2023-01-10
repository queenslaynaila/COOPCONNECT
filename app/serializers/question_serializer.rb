class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_text, :survey_id
end
