# frozen_string_literal: true

class GroupsController < ApplicationController
  respond_to :json

  def index
    group = Group.first
    render json: group
  end
end
