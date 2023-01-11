class CreateEducationDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :education_details do |t|
      t.references :jobseeker, foreign_key: true
      t.string :education_level
      t.datetime :start_date
      t.datetime :end_date
      t.string :institute_studied
      t.string :institute_location
      t.string :certificate_awarded

      t.timestamps
    end
  end
end
