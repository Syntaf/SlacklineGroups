# frozen_string_literal: true

module Moderate
  module GroupAdminDecorator
    extend ActiveSupport::Concern

    VISIBLE_FIELD_ORDER = %i[approved name slug gtype approved info location submitter].freeze

    included do
      rails_admin do
        base do
          configure :gtype, :active_record_enum do
            label 'Type'
          end

          fields(*VISIBLE_FIELD_ORDER)
        end

        edit do
          configure :slug, :string do
            read_only true
            help ''
          end
        end

        list do
          scopes [:pending, :approved, nil]
        end
      end
    end
  end
end
