# frozen_string_literal: true

class Submitter < ApplicationRecord
  belongs_to :group

  validates :email, format: Devise.email_regexp
end
