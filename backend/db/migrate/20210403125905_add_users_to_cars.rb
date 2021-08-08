class AddUsersToCars < ActiveRecord::Migration[6.0]
  def change
    add_reference :cars, :user
  end
end
