# frozen_string_literal: true

class MapController < ApplicationController
  def index
    @value = CounterJob.perform_now
  end
end
