class MoveSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :lowDmg, :highDmg
end
