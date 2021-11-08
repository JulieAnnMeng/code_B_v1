Rails.application.routes.draw do
  # resources :interests
  # resources :comments
  # resources :discussions, only: [:index, :show]
  # resources :users
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me" , to: "sessions#show"
  # post "/me", to: "sessions#create"
  delete "/me", to: "sessions#destroy"
  delete "/logout", to: "sessions#destroy"

  get "/discussions", to: "discussions#index"
  get "/discussions/:id", to: "discussions#show"
  post "/comments", to: "comments#create"
  post "/discussions", to: "discussions#create"
  get "/users/:id", to: "users#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
