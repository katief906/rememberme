class Api::V1::ListsController < ApiController
  def index
    render json: List.all()
  end
end