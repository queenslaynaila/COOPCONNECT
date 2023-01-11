class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.references :user_account, foreign_key: true
      t.string :company_name
      t.string :contact_person_first_name
      t.string :contact_person_last_name
      t.text :profile_description
      t.datetime :date_established
      t.string :website_url
      t.string :phone_number

      t.timestamps
    end
  end
end
