class CreateSurveyPropmts < ActiveRecord::Migration[7.0]
  def change
    create_table :survey_propmts do |t|
      t.string :answer_choice
      t.integer :question_id

      t.timestamps
    end
  end
end
