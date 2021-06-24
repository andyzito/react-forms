class AddIdentifierToForm < ActiveRecord::Migration[6.1]
  def change
    add_column :forms, :identifier, :string
  end
end
