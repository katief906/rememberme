class Api::V1::ListsController < ApiController

  def index
    render json: List.all()
  end

  def show
    list = List.find(params[:id])
    render json: list, serializer: ListSerializer
  end

  def new
  end

end