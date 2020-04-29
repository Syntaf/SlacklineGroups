require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  test 'supported_group' do
    group = Group.new
    group.type = :facebook_group

    group.save
  end

  test 'unsupported_group' do
    group = Group.new
    group.type = :invalid

    group.save
  end
end
