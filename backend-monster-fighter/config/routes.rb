Rails.application.routes.draw do
  resources :moves
  resources :users, only: [:index, :show, :create] # Remove index before publishing to web
  resources :monsters
  post '/login', to: 'session#create'
  post '/logout', to: 'session#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
