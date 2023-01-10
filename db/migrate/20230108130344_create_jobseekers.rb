class CreateJobseekers < ActiveRecord::Migration[7.0]
  def change
    create_table :jobseekers do |t|
      t.integer :user_account_id
      t.string :firstname
      t.string :lastname
      t.integer :phone_number
      t.string :prefered_contact_menthod
      t.string :about
      t.string :experience


      t.timestamps
    end
  end
end
