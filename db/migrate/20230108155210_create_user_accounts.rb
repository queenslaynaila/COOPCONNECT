class CreateUserAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :user_accounts do |t|
      t.string :id,
      t.integer :user_type_id
      t.string :email
      t.string :password_digest
      t.date :registration_date

      t.timestamps
    end
  end
end
