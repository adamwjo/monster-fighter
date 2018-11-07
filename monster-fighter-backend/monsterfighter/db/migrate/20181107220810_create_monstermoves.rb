class CreateMonstermoves < ActiveRecord::Migration[5.2]
  def change
    create_table :monstermoves do |t|
      t.integer :monster_id
      t.integer :move_id

      t.timestamps
    end
  end
end
