# frozen_string_literal: true

class GroupSerializer < ActiveModel::Serializer
  attributes :name, :slug, :type

  def type
    object.type.to_s
  end

  has_one :info
  has_one :location
end
