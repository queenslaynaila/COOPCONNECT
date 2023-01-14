# Resolving dependencies...
class CreateJobseekers < ActiveRecord::Migration[7.0]
  def change
    create_table :jobseekers do |t|
      t.references :user_account, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :preferred_contact_method
      t.text :about
      t.string :experience

      t.timestamps
    end
  end
end
