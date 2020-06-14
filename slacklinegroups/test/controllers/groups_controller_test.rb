# frozen_string_literal=> true

require 'test_helper'

class GroupControllerTest < ActionDispatch::IntegrationTest
  test 'Group JSON response' do
    get group_path groups(:one)
    assert_response :success
    assert_equal(
      {
        'name' => 'GroupOne',
        'type' => 'facebook_group',
        'info' => {
          'members' => 1,
          'link' => 'my-link.com',
          'is_regional' => false
        },
        'location' => {
          'lat' => '9.99',
          'lon' => '9.99'
        }
      }, response.parsed_body
    )
  end
end
