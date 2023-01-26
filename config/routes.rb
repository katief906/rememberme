Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/lists', to: 'homes#index'
end
