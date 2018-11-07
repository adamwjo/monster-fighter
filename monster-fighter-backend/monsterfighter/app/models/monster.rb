class Monster < ApplicationRecord
  belongs_to :user
  has_many :monster_moves
  has_many :moves, through: :monster_moves
end
