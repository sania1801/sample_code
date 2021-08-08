class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :name, null: false
      t.integer :year, null:false
      t.integer :power
      t.float :consumption
      t.references :fuel_type, null: false, foreign_key: true
      t.references :cost, null: false, foreign_key: true
      t.references :grade, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
