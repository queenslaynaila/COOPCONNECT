class SurveySerializer < ActiveModel::Serializer
  attributes :id, :survey_name, :company_id, :description, :start_date, :end_date
end
