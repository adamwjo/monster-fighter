class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :hp, :img
  has_many :moves, through: :monstermoves
end
