# frozen_string_literal: true

class Info < ApplicationRecord
  include Moderate::InfoAdminDecorator

  belongs_to :group, inverse_of: :info

  validates :link, presence: true
end
