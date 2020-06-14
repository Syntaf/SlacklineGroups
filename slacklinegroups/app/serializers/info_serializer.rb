# frozen_string_literal: true

class InfoSerializer < ActiveModel::Serializer
  attributes :link, :members, :is_regional

  belongs_to :group
end
