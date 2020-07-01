# frozen_string_literal: true

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  test 'supported group' do
    group = Group.new({ name: 'test group', slug: 'test-group' })
    group.gtype = :facebook_group

    assert group.valid?
  end

  test 'unsupported group' do
    group = Group.new({ name: 'test group', slug: 'test-group' })
    group.gtype = :invalid

    assert_not group.valid?
  end
end
