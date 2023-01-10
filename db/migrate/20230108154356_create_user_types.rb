class CreateUserTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :user_types do |t|
      t.string :user_type_name

      t.timestamps
    end
  end
end
