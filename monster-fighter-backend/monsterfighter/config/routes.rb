Rails.application.routes.draw do
  resources :moves
  resources :users
  resources :monsters
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
