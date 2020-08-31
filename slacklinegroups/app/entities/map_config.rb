# frozen_string_literal: true

class MapConfig
  attr_reader :show_search_bar
  attr_reader :show_side_bar
  attr_reader :show_home_button
  attr_reader :map_center
  attr_reader :zoom_level

  def self.for_params(params)
    MapConfig.new(
      params[:showSearchBar] || true,
      false,
      params[:showHomeButton] || true,
      params[:mapCenter] || nil,
      params[:zoomLevel] || nil
    )
  end

  def self.defaults()
    MapConfig.new(
      true,
      false,
      true,
      nil,
      nil
    )
  end

  def initialize(show_search_bar, show_side_bar, show_home_button, map_center, zoom_level)
    @show_search_bar = show_search_bar
    @show_side_bar = show_side_bar
    @show_home_button = show_home_button
    @map_center = map_center
    @zoom_level = zoom_level
  end

  def as_json(*)
    {
      showSearchBar: ActiveModel::Type::Boolean.new.cast(@show_search_bar),
      showSideBar: ActiveModel::Type::Boolean.new.cast(@show_side_bar),
      showHomeButton: ActiveModel::Type::Boolean.new.cast(@show_home_button),
      mapCenter: @map_center,
      zoomLevel: @zoom_level
    }
  end
end
