# frozen_string_literal: true

class LocationSerializer < ActiveModel::Serializer
  attributes :lat, :lon

  belongs_to :group
end
