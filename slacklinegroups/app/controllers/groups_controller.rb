# frozen_string_literal: true

class GroupsController < ApplicationController
  respond_to :json

  def index
    group = Group.first
    render json: group
  end

  def show
    group = Group.find(params[:id])

    render json: group
  end
end
