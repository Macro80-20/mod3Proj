Rails.application.routes.draw do
  resources :hotels, only: [:index,:create, :destroy]
  resources :users, only: [:show,:update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
end
