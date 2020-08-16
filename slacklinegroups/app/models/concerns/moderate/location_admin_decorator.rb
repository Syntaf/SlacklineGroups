# frozen_string_literal: true

module Moderate
  module LocationAdminDecorator
    extend ActiveSupport::Concern

    VISIBLE_FIELD_ORDER = %i[lat lon].freeze

    def custom_object_label
      formatted_lat = format('%05.2<lat>f', lat: lat.truncate(2))
      formatted_lon = format('%05.2<lon>f', lon: lon.truncate(2))

      "\##{id} {#{formatted_lat}, #{formatted_lon}}"
    end

    included do
      rails_admin do
        label 'Location'
        object_label_method do
          :custom_object_label
        end

        base do
          fields(*VISIBLE_FIELD_ORDER)
        end
      end
    end
  end
end
