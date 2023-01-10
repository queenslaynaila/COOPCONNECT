class SurveyPropmtSerializer < ActiveModel::Serializer
  attributes :id, :answer_choice, :question_id
end
