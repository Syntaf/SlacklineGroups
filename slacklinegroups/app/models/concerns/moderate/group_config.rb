# frozen_string_literal: true

module Moderate
  module GroupConfig
    extend ActiveSupport::Concern

    included do
      rails_admin do
        edit do
          field :slug, :string do
            read_only true
            help ''
          end
          field :name, :string
          field :type, :string
          field :approved, :boolean
          field :info
          field :location
          field :submitter
        end
      end
    end
  end
end
