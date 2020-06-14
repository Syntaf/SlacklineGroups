# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admins
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :map, only: %i[index]
  resources :groups, only: %i[index show]

  root to: 'map#index'
end
