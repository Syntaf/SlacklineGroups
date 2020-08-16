# frozen_string_literal: true

class Submitter < ApplicationRecord
  belongs_to :group, inverse_of: :submitter

  validates :email, format: Devise.email_regexp
end
