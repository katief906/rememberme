class HomesController < ApplicationController

  def index
    @lists = List.all
  end

end