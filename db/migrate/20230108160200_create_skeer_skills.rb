class CreateSkeerSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skeer_skills do |t|
      t.integer :job_skeer_id
      t.string :skill_name

      t.timestamps
    end
  end
end
