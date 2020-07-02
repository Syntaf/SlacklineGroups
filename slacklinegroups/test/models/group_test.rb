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

  test 'accepts nested attributes' do
    group = Group.new({
      name: 'test group',
      slug: 'test-group',
      gtype: :facebook_group,
      info_attributes: {
        link: 'http://facebook.com',
        members: 2,
        is_regional: false
      },
      location_attributes: {
        lat: 12.9,
        lon: 13.5
      }
    })

    assert group.valid?
  end
end
