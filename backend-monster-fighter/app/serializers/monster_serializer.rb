class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :hp, :img
end
