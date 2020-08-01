# frozen_string_literal: true

class Location < ApplicationRecord
  belongs_to :group

  validates :lat, presence: true
  validates :lon, presence: true
end
