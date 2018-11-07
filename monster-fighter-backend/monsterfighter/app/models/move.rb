class Move < ApplicationRecord
  has_many :monster_moves
  has_many :monsters, through: :monster_moves
end
