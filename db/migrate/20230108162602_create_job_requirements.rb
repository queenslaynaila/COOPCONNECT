class CreateJobRequirements < ActiveRecord::Migration[7.0]
  def change
    create_table :job_requirements do |t|
      t.integer :job_id
      t.string :requirements

      t.timestamps
    end
  end
end
 