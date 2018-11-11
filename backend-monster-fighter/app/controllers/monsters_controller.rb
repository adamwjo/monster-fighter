class MonstersController < ApplicationController
  def index
    @monsters = Monster.all.includes(:moves, :user)
    render(
      json: @monsters,
      each_serializer: MonsterSerializer
    )
  end

  def create
    @monster = Monster.create(monster_params)
    if @monster.valid?
      render json: {monster: MonsterSerializer.new(@monster)}, status: :created
    else
      render json: { error: 'failed to create monster'}, status: :not_acceptable
    end
  end

private

  def monster_params
    params.require(:name, :description, :hp, :img, :moves, :user)
  end
end
