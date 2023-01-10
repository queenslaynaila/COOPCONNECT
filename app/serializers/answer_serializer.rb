class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :answer
  belongs_to :question
end
