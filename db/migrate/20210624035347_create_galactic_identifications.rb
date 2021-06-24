class CreateGalacticIdentifications < ActiveRecord::Migration[6.1]
  def change
    create_table :galactic_identifications do |t|
      t.string :name
      t.string :id_number
      t.integer :quadrant

      t.timestamps
    end
  end
end
