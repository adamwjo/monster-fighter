class MoveSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :lowDmg, :highDmg, :img
  has_many :monsters, through: :monstermoves
end
