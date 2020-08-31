# frozen_string_literal: true

class MapController < ApplicationController
  def index
    @map_config = MapConfig.for_params(params) if embeded?
  end

  private

  def embeded?
    request.subdomain == 'api'
  end
end
