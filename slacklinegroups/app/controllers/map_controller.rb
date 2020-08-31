# frozen_string_literal: true

class MapController < ApplicationController
  def index
    @map_config = MapConfig.for_params(params) if embeded_view?
  end
end
