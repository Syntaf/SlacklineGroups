class CreateAuthors < ActiveRecord::Migration[6.0]
  def change
    create_table :authors do |t|
      t.string :email, null: false

      t.timestamps
    end

    add_reference :groups, :author, index: true, foreign_key: true
    add_column :groups, :approved, :boolean, default: false
  end
end
