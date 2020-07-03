# frozen_string_literal: true

module Sluggable
  extend ActiveSupport::Concern

  def generate_slug(text)
    slug = sanitize(text)
    uid = generate_unique

    "#{slug}-#{uid}"
  end

  private

  def sanitize(name)
    name.downcase.parameterize
  end

  def generate_unique
    rand(14**8).to_s(14)
  end
end
