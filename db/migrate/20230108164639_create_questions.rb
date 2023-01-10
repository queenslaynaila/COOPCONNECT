class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.references :survey, foreign_key: true
      t.text :question_text
  
      t.timestamps
    end
  end
end
