class CreateSurveys < ActiveRecord::Migration[7.0]
  def change
    create_table :surveys do |t|
      t.string :survey_name
      t.integer :company_id
      t.string :description
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
