class Monster < ApplicationRecord
  belongs_to :user
  has_many :monstermoves
  has_many :moves, through: :monstermoves
end
