class CreateUserAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :user_accounts do |t|
      t.references :user_type, foreign_key: true
      t.string :email
      t.string :password_digest
      t.datetime :registration_date

      t.timestamps
    end
  end
end
