class MonstersController < ApplicationController
  def index
    @monsters = Monster.all.includes(:moves)
    render(
      json: @monsters,
      each_serializer: MonsterSerializer
    )
  end
end
