class CreateSavedJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_jobs do |t|
      t.integer :job_id
      t.integer :jobseeker_id

      t.timestamps
    end
  end
end
