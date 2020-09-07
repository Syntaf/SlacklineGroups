class AddApprovedToAdmin < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :approved, :boolean, default: false, null: false
  end
end
