class MovesController < ApplicationController
  def index
    @moves = Move.all
    render(
      json: @moves,
      each_serializer: MoveSerializer
    )
  end
end
