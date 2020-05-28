# frozen_string_literal: true

require 'symbol_serializer'

class Group < ApplicationRecord
  has_one :info, dependent: :destroy
  has_one :location, dependent: :destroy

  GROUP_TYPES = %i[facebook_group facebook_page other].freeze

  serialize :gtype, Slg::SymbolSerializer
  validates :gtype, inclusion: { in: GROUP_TYPES }
end
