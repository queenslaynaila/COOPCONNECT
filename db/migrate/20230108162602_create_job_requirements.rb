class CreateJobRequirements < ActiveRecord::Migration[7.0]
  def change
    create_table :job_requirements do |t|
      t.references :job, foreign_key: true
      t.string :requirement

      t.timestamps
    end
  end
end
 