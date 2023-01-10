class CreateSavedCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_companies do |t|
      t.integer :company_id
      t.integer :seeker_id

      t.timestamps
    end
  end
end
