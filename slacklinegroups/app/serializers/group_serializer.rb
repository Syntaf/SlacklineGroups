# frozen_string_literal: true

class GroupSerializer < ActiveModel::Serializer
  attributes :name
  attribute :gtype, key: :type

  has_one :info
  has_one :location
end
