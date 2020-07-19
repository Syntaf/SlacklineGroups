# frozen_string_literal: true

require 'test_helper'

class GroupControllerTest < ActionDispatch::IntegrationTest
  test 'get all groups' do
    get groups_path

    assert_response :success
  end

  test 'get groups with limit' do
    get groups_path limit: 1

    assert_response :success
    assert_equal(1, response.parsed_body.length)
  end

  test 'show action JSON format' do
    group = groups(:one)

    get group_path(group)
    assert_response :success
    assert_equal group_as_json(group), response.parsed_body
  end

  test 'create group' do
    group = groups(:one)
    group.slug = nil

    post groups_path, params: form_submit_with(group)

    assert_response :success

    response_group = response.parsed_body['group']

    group.slug = response_group['slug']
    expected_json = { 'status' => 'success', 'group' => group_as_json(group) }

    assert_equal expected_json, response.parsed_body
  end

  test 'error update keeps slug' do
    group = groups(:one)
    group.type = :facebook_page

    patch group_path(group), params: form_submit_with(group)

    assert_response :success
    assert_equal group.slug, response.parsed_body['group']['slug']
    assert_equal group.type.to_s, response.parsed_body['group']['type']
  end

  test 'updating name updates slug' do
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

    {
      group: form_group
    }
  end

  # Convert a Group instance into a JSON hash. Stringifys keys so it can
  # be compared with the response body
  #
  # @param group [Group] the group to convert to JSON
  def group_as_json(group)
    GroupSerializer.new(group)
                   .as_json
                   .deep_stringify_keys
  end
end
