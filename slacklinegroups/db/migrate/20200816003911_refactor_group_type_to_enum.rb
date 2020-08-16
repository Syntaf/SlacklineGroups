class RefactorGroupTypeToEnum < ActiveRecord::Migration[6.0]
  def change
    remove_column :groups, :gtype
    add_column :groups, :gtype, :integer
  end
end
