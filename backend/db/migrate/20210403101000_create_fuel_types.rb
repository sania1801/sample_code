class CreateFuelTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :fuel_types do |t|
      t.string :name, null: false
      t.string :specification, null: false

      t.timestamps
    end
  end
end
