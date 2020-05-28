# frozen_string_literal: true

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  test 'supported_group' do
    group = Group.new
    group.gtype = :facebook_group

    assert group.valid?
  end

  test 'unsupported_group' do
    group = Group.new
    group.gtype = :invalid

    assert_not group.valid?
  end
end
