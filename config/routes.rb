Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/lists', to: 'homes#index'
  get '/lists/:id', to: 'homes#index'
  get '/lists/new', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :lists, only: [:index, :show, :new]
    end
  end

end
