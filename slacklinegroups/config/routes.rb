# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  mount Sidekiq::Web => '/sidekiq'

  devise_for :admins

  resources :groups, param: :slug
  resources :map, only: %i[index]
  resources :about, only: %i[index]
  
  root to: 'map#index'
end
