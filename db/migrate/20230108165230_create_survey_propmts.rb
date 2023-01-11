class CreateSurveyPropmts < ActiveRecord::Migration[7.0]
  def change
    create_table :survey_propmts do |t|
      t.references :question, foreign_key: true
      t.string :answer_choice

      t.timestamps
    end
  end
end
