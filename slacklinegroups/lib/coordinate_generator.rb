# frozen_string_literal: true

module Slg
  class CoordinateGenerator
    EARTH_RADIUS = 6371
    ONE_DEGREE = EARTH_RADIUS * 2 * Math::PI / 360 * 1000

    def random_location(lon, lat, max_radius_km)
      dx, dy = random_point_in_disk(max_radius_km)

      random_lat = lat + dy / ONE_DEGREE
      random_lon = lon + dx / (ONE_DEGREE * Math::cos(lat * Math::PI / 180))
      [random_lon, random_lat]
    end

    private

    def random_point_in_disk(max_radius_km)
      r = max_radius_km * rand**0.5
      theta = rand * 2 * Math::PI
      [r * Math.cos(theta), r * Math.sin(theta)]
    end
  end
end
