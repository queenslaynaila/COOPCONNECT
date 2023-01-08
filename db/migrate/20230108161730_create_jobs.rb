class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.integer :company_id
      t.integer :category_id
      t.string :job_title
      t.string :skill_required
      t.string :role
      t.string :job_location
      t.string :job_description
      t.string :position_availabale
      t.date :application_deadline
      t.string :salary_range
      t.string :job_details
      t.date :posted_on

      t.timestamps
    end
  end
end
