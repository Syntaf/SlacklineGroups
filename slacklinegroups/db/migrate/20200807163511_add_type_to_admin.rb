class AddTypeToAdmin < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :type, :string, null: false, default: 'Moderator'
  end
end
