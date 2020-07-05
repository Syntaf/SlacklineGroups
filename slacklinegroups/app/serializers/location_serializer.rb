# frozen_string_literal: true

class LocationSerializer < ActiveModel::Serializer
  attributes :lat, :lon

  def lat
    object.lat.to_s
  end

  def lon
    object.lon.to_s
  end

  belongs_to :group
end
