class MonstersController < ApplicationController
  def index
    @monsters = Monster.all
    render(
      json: @monsters,
      each_serializer: MonsterSerializer
    )
  end
end
