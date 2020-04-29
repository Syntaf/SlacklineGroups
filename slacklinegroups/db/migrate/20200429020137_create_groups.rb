class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :slug
      t.string :type

      t.timestamps
    end

    add_index :groups, [:slug], unique: true
  end
end
