class CreateExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :experiences do |t|
      t.integer :jobseeker_id
      t.date :startdate
      t.date :enddate
      t.string :job_title
      t.string :company_name
      t.string :job_description

      t.timestamps
    end
  end
end
