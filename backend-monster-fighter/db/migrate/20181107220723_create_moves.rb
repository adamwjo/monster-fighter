class CreateMoves < ActiveRecord::Migration[5.2]
  def change
    create_table :moves do |t|
      t.string :name
      t.string :description
      t.integer :lowDmg
      t.integer :highDmg

      t.timestamps
    end
  end
end
