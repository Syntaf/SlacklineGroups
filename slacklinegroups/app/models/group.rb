# frozen_string_literal: true

require 'symbol_serializer'

class Group < ApplicationRecord
  GROUP_TYPES = %i[facebook_group facebook_page other].freeze

  has_one :info, dependent: :destroy
  has_one :location, dependent: :destroy

  serialize :gtype, Slg::SymbolSerializer

  validates :gtype, inclusion: { in: GROUP_TYPES }
  validates :name, presence: true
  validates :slug, presence: true

  accepts_nested_attributes_for :info
  accepts_nested_attributes_for :location
end
