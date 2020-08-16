# frozen_string_literal: true

class Info < ApplicationRecord
  belongs_to :group, inverse_of: :info

  validates :link, presence: true
end
