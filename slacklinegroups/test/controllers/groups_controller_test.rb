# frozen_string_literal: true

require 'test_helper'

class GroupControllerTest < ActionDispatch::IntegrationTest
  test 'gets all groups' do
    get groups_path

    assert_response :success
  end

  test 'gets all groups with limit' do
    get groups_path limit: 1

    assert_response :success
    assert_equal(1, response.parsed_body.length)
  end

  test 'verifies expected group format' do
    group = groups(:one)

    get group_path(group)
    assert_response :success
    assert_equal expected_serialization_for(group), response.parsed_body
  end

  test 'creates group' do
    group = groups(:one)
    group.slug = nil

    post groups_path, params: form_submit_with(group)

    assert_response :success

    response_group = response.parsed_body['group']

    group.slug = response_group['slug']
    expected_json = { 'status' => 'success', 'group' => expected_serialization_for(group) }

    assert_equal expected_json, response.parsed_body
  end

  test 'rejects invalid location' do
    group = groups(:one)
    group.location = nil

    post groups_path, params: form_submit_with(group)

    assert_response :bad_request
    assert_includes response.parsed_body, 'errors'
  end

  test 'rejects invalid name' do
    group = groups(:one)
    group.name = nil

    post groups_path, params: form_submit_with(group)

    assert_response :bad_request
    assert_includes response.parsed_body, 'errors'
  end

  test 'validates invalid link' do
    group = groups(:one)
    group.info.link = nil

    post groups_path, params: form_submit_with(group)

    assert_response :bad_request
  end

  test 'rejects invalid submitter email' do
    group = groups(:one)
    group.submitter.email = 'invalidemail'

    post groups_path, params: form_submit_with(group)

    assert_response :bad_request
  end

  test 'accepts missing submitter' do
    group = groups(:one)
    group.submitter = nil

    post groups_path, params: form_submit_with(group)

    assert_response :success
  end

  test 'updating group type maintains slug' do
    group = groups(:one)
    group.type = :facebook_page

    patch group_path(group), params: form_submit_with(group)

    assert_response :success
    assert_equal group.slug, response.parsed_body['group']['slug']
    assert_equal group.type.to_s, response.parsed_body['group']['type']
  end

  test 'updating group name updates slug' do
    group = groups(:one)
    group.name = 'new group name'
    old_slug = group.slug

    patch group_path(group), params: form_submit_with(group)

    assert_response :success
    assert_not_equal old_slug, response.parsed_body['group']['slug']
  end

  test 'invalid slug on show returns 404' do
    assert_raises ActiveRecord::RecordNotFound do
      get group_path(slug: 'does-not-exist')
    end
  end

  test 'invalid slug on update returns 404' do
    assert_raises ActiveRecord::RecordNotFound do
      patch group_path(slug: 'does-not-exist'), params: {}
    end
  end

  private

  # Transorms a Group instance into a form request
  #
  # @param group [Group] the group to transform
  def form_submit_with(group)
    form_group = GroupSerializer.new(group).as_json
    form_group[:info_attributes] = form_group.delete :info
    form_group[:location_attributes] = form_group .delete :location
    form_group[:submitter_attributes] = { email: group.submitter.email } unless group.submitter.nil?

    {
      group: form_group
    }
  end

  # Manually defines the expected serialization format
  # for a given group
  #
  # @param group [Group] the group to convert to JSON
  def expected_serialization_for(group)
    {
      'name' => group.name,
      'slug' => group.slug,
      'type' => group.type,
      'info' => {
        'link' => group.info.link,
        'members' => group.info.members,
        'is_regional' => group.info.is_regional?
      },
      'location' => {
        'lat' => group.location.lat.to_s,
        'lon' => group.location.lon.to_s
      }
    }
  end
end
