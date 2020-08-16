# frozen_string_literal: true

class GroupSerializer < ActiveModel::Serializer
  attributes :name, :slug, :type

  has_one :info
  has_one :location
end
