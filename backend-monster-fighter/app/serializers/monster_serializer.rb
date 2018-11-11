class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :hp, :img, :created_at, :moves, :user
  has_many :moves, through: :monstermoves
  belongs_to :user
end
