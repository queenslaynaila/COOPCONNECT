class CreateEmployers < ActiveRecord::Migration[7.0]
  def change
    create_table :employers do |t|
      t.string :employer_name
      t.string :contact_person_firstname
      t.string :contact_person_lastname
      t.string :contact_person_email
      t.string :password_digest

      t.timestamps
    end
  end
end
