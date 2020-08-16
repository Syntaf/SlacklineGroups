# frozen_string_literal: true

module Moderate
  module GroupConfig
    extend ActiveSupport::Concern

    VISIBLE_FIELD_ORDER = %i[approved name slug gtype approved info location submitter].freeze

    class << self
      # Defines the default configuration shared by all admin views relating to Group
      #
      # @return [Proc] A proc to be evaluated by a given admin configuration block
      def base_configuration
        proc do
          configure :gtype, :active_record_enum do
            label 'Type'
          end

          fields(*VISIBLE_FIELD_ORDER)
        end
      end
    end

    included do
      rails_admin do
        edit do
          instance_eval(&Moderate::GroupConfig.base_configuration)

          configure :slug, :string do
            read_only true
            help ''
          end
        end

        list(&Moderate::GroupConfig.base_configuration)
        show(&Moderate::GroupConfig.base_configuration)
      end
    end
  end
end
