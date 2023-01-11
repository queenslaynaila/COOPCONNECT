class SurveySerializer < ActiveModel::Serializer
  attributes :id, :survey_name, :company_id, :description, :start_date, :end_date
  belongs_to :company
  has_many :questions
end
