# frozen_string_literal: true

require 'symbol_serializer'

class Group < ApplicationRecord
  GROUP_TYPES = %i[facebook_group facebook_page other].freeze

  serialize :type, Slg::SymbolSerializer
  validates :type, inclusion: { in: GROUP_TYPES }
end
