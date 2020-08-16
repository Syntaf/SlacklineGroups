# frozen_string_literal: true

class Location < ApplicationRecord
  include Moderate::LocationAdminDecorator

  belongs_to :group, inverse_of: :location

  validates :lat, presence: true
  validates :lon, presence: true
end
