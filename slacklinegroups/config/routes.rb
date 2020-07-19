# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admins

  resources :groups, param: :slug do
    post 'validate', on: :collection
  end

  resources :map, only: %i[index]
  resources :about, only: %i[index]
  
  root to: 'map#index'
end
