class CreateJobSkillSets < ActiveRecord::Migration[7.0]
  def change
    create_table :job_skill_sets do |t|
      t.references :job, foreign_key: true
      t.string :skill_description
      
      t.timestamps
    end
  end
end
