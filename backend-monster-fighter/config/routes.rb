Rails.application.routes.draw do
  resources :moves
  resources :users, only: [:index, :show, :create] # Remove index before publishing to web
  resources :monsters
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
