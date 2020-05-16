# frozen_string_literal: true

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  test 'supported_group' do
    group = Group.new
    group.type = :facebook_group

    assert group.valid?
  end

  test 'unsupported_group' do
    group = Group.new
    group.type = :invalid

    assert_not group.valid?
  end
end
