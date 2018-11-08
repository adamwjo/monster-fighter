class Move < ApplicationRecord
  has_many :monstermoves
  has_many :monsters, through: :monstermoves
end
