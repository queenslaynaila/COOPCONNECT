class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.references :company, foreign_key: true
      t.references :job_category, foreign_key: true
      t.string :job_title
      t.string :skill_required
      t.string :role
      t.string :job_location
      t.text :job_description
      t.integer :position_available
      t.datetime :application_deadline
      t.decimal :salary_range
      t.text :job_details
      t.datetime :posted_on

      t.timestamps
    end
  end
end
