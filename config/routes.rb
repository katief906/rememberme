Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/lists', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :lists, only: [:index]
    end
  end
end
