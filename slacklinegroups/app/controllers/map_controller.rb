# frozen_string_literal: true

class MapController < ApplicationController
  before_action :set_view_context

  def index
    logger.debug params
  end

  private

  # Determines the view context of the given request. Available
  # view contexts are :native and :embeded
  def set_view_context
    @view_context = request.subdomain == 'api' ? :embeded : :native
  end
end
