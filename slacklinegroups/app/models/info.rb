# frozen_string_literal: true

class Info < ApplicationRecord
  belongs_to :group

  validates :link, presence: true
end
