# frozen_string_literal: true

require 'symbol_serializer'

class Group < ApplicationRecord
  include Sluggable

  GROUP_TYPES = %i[facebook_group facebook_page other].freeze

  alias_attribute :type, :gtype

  belongs_to :author, optional: true

  has_one :info, dependent: :destroy
  has_one :location, dependent: :destroy

  serialize :gtype, Slg::SymbolSerializer

  validates :name, presence: true
  validates :slug, presence: false, on: :create
  validates :type,
            presence: true,
            inclusion: { in: GROUP_TYPES, if: proc { |g| g.type? } }

  before_create :assign_slug
  before_update :assign_slug, if: proc { |m| m.name_changed? }

  accepts_nested_attributes_for :author
  accepts_nested_attributes_for :info
  accepts_nested_attributes_for :location

  def to_param
    slug
  end

  private

  def assign_slug
    self.slug = generate_slug(name)
  end
end
