require 'symbol_serializer'

class Group < ApplicationRecord
  GROUP_TYPES = %i[facebook_group facebook_page other]

  serialize :type, Slg::SymbolSerializer
  validates :type, inclusion: { in: GROUP_TYPES }

  # # Sets the group_type from a collection of allowable symbols. Enforces
  # # the consistency of this field regardless of it's creation source.
  # #
  # # @param [Symbol] type One of :facebook_group, :facebook_page, :other
  # def type=(type)
  #   super(type.to_s) if types.presence_in(GROUP_TYPES)

  #   raise InvalidGroupType, "Type of #{type.to_s} not supported"
  # end
end
