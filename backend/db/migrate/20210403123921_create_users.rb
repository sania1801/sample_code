class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email, unique: true
      t.string :name
      t.string :last_name
      t.boolean :legal_entity, default: false, null: false
      t.integer :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in
      t.datetime :last_sign_in_at
      t.string :current_sign_in_ip
      t.string :last_sign_in_ip
      t.string :encrypted_password
      t.string :reset_password_token
      t.datetime :reset_password_sent_at
      t.string :phone, unique: true, null: false

      t.timestamps
    end
  end
end
