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

  def new
    @group = Group.new
  end

  def create
    group = Group.new(group_params)

    if group.save
      render json: { status: :success, group: GroupSerializer.new(group) }
    else
      render json: { status: :error, errors: group.errors }
    end
  end

  def show
    group = Group.find_by({ slug: params[:slug] })

    render json: group
  end

  def edit; end

  def update
    group = Group.find_by({ slug: params[:slug] })

    if group.update(group_params)
      render json: { status: :success, group: GroupSerializer.new(group) }
    else
      render json: { status: :error, errors: group.errors }
    end
  end

  def destroy; end

  private

  def group_params
    params.require(:group).permit(
      :type,
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
