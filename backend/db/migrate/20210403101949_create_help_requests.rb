class CreateHelpRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :help_requests do |t|
      t.string :first_name, null: false
      t.string :phone, null: false
      t.text :question, null: false

      t.timestamps
    end
  end
end
