Rails.application.routes.draw do
  root 'forms#index'
  resources :forms

  namespace :api do
    namespace :v1 do
      # resources :galactic_identifications
      get 'galactic_identifications', to: 'galactic_identifications#index'
      post 'galactic_identifications', to: 'galactic_identifications#create'

      get 'q_zed_incidents', to: 'q_zed_incidents#index'
      post 'q_zed_incidents', to: 'q_zed_incidents#create'
      get 'q_zed_incidents/options', to: 'q_zed_incidents#get_options'
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
