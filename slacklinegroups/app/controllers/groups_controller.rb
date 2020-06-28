# frozen_string_literal: true

class GroupsController < ApplicationController
  respond_to :json, only: %i[index show]
  respond_to :html, only: %i[new]

  # TO-DO: Consider reworking frontend to paginate this once the response
  # size grows too large
  def index
    groups = Group.includes(:info, :location).limit(params[:limit])
    render json: groups
  end

  def show
    group = Group.find(params[:id])

    render json: group
  end

  def new
  end
end
