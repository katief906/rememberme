class Api::V1::ListsController < ApiController

  def index
    render json: List.all
  end

  def show
    list = List.find(params[:id])
    render json: list, serializer: ListSerializer
  end

  def new
  end

  def create
    list = List.new(list_params)
    list.user = User.find(1)
    if list.save
      render json: { list: list }
    else
      render json: { error: list.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def list_params
    params.require(:list).permit(:name, :icon, :color)
  end

end