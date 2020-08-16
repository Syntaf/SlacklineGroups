# frozen_string_literal: true

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  test 'supported group' do
    group = Group.new({ name: 'test group' })
    group.location = Location.new({ lat: 1, lon: 1 })
    group.info = Info.new({ link: 'slacklinegroups.com' })

    group.type = :facebook_group

    assert group.valid?
  end

  test 'unsupported group type' do
    assert_raises ArgumentError do
      Group.new({ type: :invalid })
    end
  end

  test 'generates slug on create' do
    group = Group.new({ type: :facebook_group, name: 'test group' })
    group.location = Location.new({ lat: 1, lon: 1 })
    group.info = Info.new({ link: 'slacklinegroups.com' })

    mock = Minitest::Mock.new
    mock.expect :call, nil, ['test group']

    group.stub :generate_slug, mock do
      group.save
    end

    mock.verify
  end

  test 'maintains existing slug on update' do
    group = groups(:one)

    group.type = :facebook_page

    group.save
    assert_equal 'one', group.slug
  end

  test 'updates slug on name change' do
    group = groups(:one)
    group.name = 'My New Name'

    mock = Minitest::Mock.new
    mock.expect :call, nil, ['My New Name']

    group.stub :generate_slug, mock do
      group.save
    end

    mock.verify
  end

  test 'accepts nested attributes' do
    group = Group.new({
      name: 'test group',
      slug: 'test-group',
      type: 'facebook_group',
      info_attributes: {
        link: 'http://facebook.com',
        members: 2,
        is_regional: false
      },
      location_attributes: {
        lat: 12.9,
        lon: 13.5
      },
      submitter_attributes: {
        email: 'admin@localhost'
      }
    })

    assert group.valid?
  end
end
