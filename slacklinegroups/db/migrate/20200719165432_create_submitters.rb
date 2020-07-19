class CreateSubmitters < ActiveRecord::Migration[6.0]
  def change
    create_table :submitters do |t|
      t.string :email, null: false
      t.references :group, null: true, foreign_key: true

      t.timestamps
    end

    add_column :groups, :approved, :boolean, default: false
  end
end
