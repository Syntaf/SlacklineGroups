class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.decimal :lat
      t.decimal :lon
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
