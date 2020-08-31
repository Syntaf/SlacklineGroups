# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do
  constraints subdomain: false do
    mount RailsAdmin::Engine => '/admin/manage', as: 'rails_admin'
    get '/admin', to: redirect('/admin/manage')
  
    authenticate :admin, ->(user) { user.is_a?(Overseer) } do
      mount Sidekiq::Web => '/admin/monitor'
    end
  
    devise_for :admins, path: 'admin'
  
    resources :about, only: %i[index]
  end
  
  resources :map, only: %i[index]
  resources :groups, param: :slug

  root to: 'map#index'
end
