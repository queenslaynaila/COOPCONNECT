class CreateEducationDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :education_details do |t|
      t.integer :jobseekerid
      t.string :education_level
      t.time :startdate
      t.time :enddate
      t.string :institute_studied
      t.string :institute_location
      t.string :certificate_awarded

      t.timestamps
    end
  end
end
