class CreateExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :experiences do |t|
      t.references :jobseeker, foreign_key: true
      t.datetime :start_date
      t.datetime :end_date
      t.string :job_title
      t.string :company_name
      t.text :job_description

      t.timestamps
    end
  end
end
