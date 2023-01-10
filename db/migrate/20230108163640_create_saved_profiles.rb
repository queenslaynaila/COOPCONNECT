class CreateSavedProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_profiles do |t|
      t.integer :company_id
      t.integer :jobseeker_id

      t.timestamps
    end
  end
end
