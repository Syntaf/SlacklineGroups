# frozen_string_literal: true

require 'test_helper'

class SubmitterTest < ActiveSupport::TestCase
  test 'rejects invalid email' do
    submitter = Submitter.new
    submitter.group = groups(:one)

    ['invalid@@gmail.com', 'invalid'].each do |email|
      submitter.email = email

      assert_not submitter.valid?
    end
  end

  test 'accepts valid emails' do
    submitter = Submitter.new
    submitter.group = groups(:one)

    ['admin@example.com', 'johndoe@gmail.com'].each do |email|
      submitter.email = email

      assert submitter.valid?
    end
  end
end
