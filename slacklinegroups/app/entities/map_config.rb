# frozen_string_literal: true

class MapConfig
  attr_reader :show_search_bar
  attr_reader :show_home_button
  attr_reader :map_center
  attr_reader :zoom_level
  attr_reader :group_slug

  def self.for_params(params)
    MapConfig.new(
      params[:showSearchBar] || true,
      params[:showHomeButton] || true,
      params[:mapCenter] || nil,
      params[:zoomLevel] || nil,
      params[:groupSlug] || nil
    )
  end

  def initialize(show_search_bar, show_home_button, map_center, zoom_level, group_slug)
    @show_search_bar = show_search_bar
    @show_home_button = show_home_button
    @map_center = map_center
    @zoom_level = zoom_level
    @group_slug = group_slug
  end
end
