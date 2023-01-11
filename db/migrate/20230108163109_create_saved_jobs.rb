class CreateSavedJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_jobs do |t|
      t.references :job, foreign_key: true
      t.references :jobseeker, foreign_key: true

      t.timestamps
    end
  end
end
