# frozen_string_literal: true

module Moderate
  module InfoAdminDecorator
    extend ActiveSupport::Concern

    VISIBLE_FIELD_ORDER = %i[group link members is_regional].freeze

    included do
      rails_admin do
        label 'Group Properties'

        base do
          fields(*VISIBLE_FIELD_ORDER)
        end
      end
    end
  end
end
