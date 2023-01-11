class EducationDetailSerializer < ActiveModel::Serializer
  attributes :id, :jobseekerid, :education_level, :start_date, :end_date, :institute_studied, :institute_location, :certificate_awarded
end
