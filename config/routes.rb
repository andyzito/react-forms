Rails.application.routes.draw do
  resources :forms

  namespace :api do
    namespace :v1 do
      # resources :galactic_identifications
      get 'galactic_identifications', to: 'galactic_identifications#index'
      post 'galactic_identifications', to: 'galactic_identifications#create'
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
