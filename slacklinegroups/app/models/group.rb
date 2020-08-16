# frozen_string_literal: true

class Group < ApplicationRecord
  include Moderate::GroupConfig
  include Sluggable

  alias_attribute :type, :gtype

  enum gtype: { facebook_group: 0, facebook_page: 1, other: 2 }

  has_one :info, dependent: :destroy
  has_one :location, dependent: :destroy
  has_one :submitter, dependent: :destroy

  validates :info, presence: true
  validates :location, presence: true
  validates :name, presence: true
  validates :slug, presence: false, on: :create

  validates_associated :info
  validates_associated :location
  validates_associated :submitter

  before_create :assign_slug
  before_update :assign_slug, if: proc { |m| m.name_changed? }

  accepts_nested_attributes_for :info
  accepts_nested_attributes_for :location
  accepts_nested_attributes_for :submitter

  def to_param
    slug
  end

  private

  def assign_slug
    self.slug = generate_slug(name)
  end
end
