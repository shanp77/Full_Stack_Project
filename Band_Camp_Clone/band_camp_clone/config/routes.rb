Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: 'root#root'

 namespace :api, defaults: {format: :json} do
  resources :users, only: [:create, :show, :destroy]
  resource :session, only: [:create, :destroy]
  resources :albums, only: [:show]
  resources :tracks, only: [:show]

  resources :users, only: [:show] do
    resources :albums, only: [:index, :create] 
  end

  resources :users, only: [:show] do
    resources :tracks, only: [:index] 
  end

  resources :albums, only: [:show] do
    resources :tracks, only: [:create] 
  end
 end

end
