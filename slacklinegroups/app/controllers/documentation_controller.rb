# frozen_string_literal: true

class DocumentationController < ApplicationController
  def index
    @example_group = Group.approved.first
    @api_url = build_api_url
  end

  private

  def build_api_url
    port = ':3001' if Rails.env.development?

    "#{request.scheme}://api.#{request.host}#{port}"
  end
end
