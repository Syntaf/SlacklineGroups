# frozen_string_literal: true

class GroupsController < ApplicationController
  respond_to :json, only: %i[index show create]
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
    @group = Group.new
  end

  def create
    group = Group.create(group_params)

    if group.valid?
      render json: { status: :success, group: GroupSerializer.new(group) }
    else
      render json: { status: :error, errors: group.errors }
    end
  end

  private

  def group_params
    params.require(:group).permit(
      :gtype,
      :name,
      info_attributes: %i[
        link
        members
        is_regional
      ],
      location_attributes: %i[
        lat
        lon
      ]
    )
  end
end
