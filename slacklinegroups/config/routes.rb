# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admins

  resources :map, only: %i[index]
  resources :groups, only: %i[index show]
  resources :about, only: %i[index]
  
  root to: 'map#index'
end
