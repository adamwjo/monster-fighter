class MovesController < ApplicationController
  def index
    @moves = Move.all
    render json: @moves.to_json
  end
end
