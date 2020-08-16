# frozen_string_literal: true

module Moderate
  module LocationAdminDecorator
    extend ActiveSupport::Concern

    VISIBLE_FIELD_ORDER = %i[group lat lon].freeze

    # Generates a custom label for location objects of the form
    # "<id> {<lat>, <lon>}". Formats lat & lon as 00.00
    #
    # @return [String] the formatted label to use within rails_admin
    def custom_object_label
      formatted_lat = format('%05.2<lat>f', lat: lat.truncate(2))
      formatted_lon = format('%05.2<lon>f', lon: lon.truncate(2))

      "\##{id} {#{formatted_lat}, #{formatted_lon}}"
    end

    included do
      rails_admin do
        label 'Group Locations'
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
