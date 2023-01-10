class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.integer :user_account_id
      t.string :company_name
      t.string :contact_person_fisrtname
      t.string :contact_person_lastname
      t.string :profile_description
      t.date :date_established
      t.string :website_url
      t.integer :phone_number

      t.timestamps
    end
  end
end
