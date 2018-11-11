class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :hp, :img, :moves
  has_many :moves, through: :monstermoves
end
