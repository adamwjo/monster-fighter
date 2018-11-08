class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.integer :user_id
      t.string :name
      t.text :description
      t.integer :hp
      t.string :img

      t.timestamps
    end
  end
end
