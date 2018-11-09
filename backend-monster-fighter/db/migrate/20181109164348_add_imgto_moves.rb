class AddImgtoMoves < ActiveRecord::Migration[5.2]
  def change
    add_column :moves, :img, :string
  end
end
