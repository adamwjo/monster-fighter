class MonstersController < ApplicationController
  def index
    @monsters = Monster.all
    render json: @monsters.to_json
  end
end
