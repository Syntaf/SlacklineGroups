class CreateInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :infos do |t|
      t.string :link
      t.integer :members
      t.boolean :is_regional
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
