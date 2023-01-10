class EducationDetailSerializer < ActiveModel::Serializer
  attributes :id, :jobseekerid, :education_level, :startdate, :enddate, :institute_studied, :institute_location, :certificate_awarded
end
