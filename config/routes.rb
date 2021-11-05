Rails.application.routes.draw do
  # resources :interests
  # resources :comments
  resources :discussions, only: [:index, :show]
  # resources :users
  post "/login", to: "show#sessions"
  post "/signup", to: "users#create"
  get "/me" , to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get "/discussions", to: "index#discussions"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
