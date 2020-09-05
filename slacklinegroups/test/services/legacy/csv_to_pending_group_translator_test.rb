# frozen_string_literal: true

require 'test_helper'
require 'csv'

module Legacy
  class CsvToPendingGroupTranslatorTest < ActiveSupport::TestCase
    EXAMPLE_ROW_VALUES = [
      1,
      'Test Group',
      'facebook group',
      12.4,
      10.6,
      'https://facebook.com',
      'submitter@localhost',
      0,
      true,
      '2020-05-25 06:54:21.286147',
      '2020-05-25 06:54:21.286147'
    ].freeze

    test 'rejects missing headers' do
      row = CSV::Row.new(%w[id name group_type], [1, 'test', 'facebook group'])

      assert_raises CsvToPendingGroupTranslator::MalformedHeaderError do
        CsvToGroupTranslator.call(row)
      end
    end

    test 'rejects malformed headers' do
      headers = CsvToPendingGroupTranslator::EXPECTED_HEADERS.dup
      headers[6] = :emailzzz

      row = CSV::Row.new(headers, EXAMPLE_ROW_VALUES)

      assert_raises CsvToPendingGroupTranslator::MalformedHeaderError do
        CsvToPendingGroupTranslator.call(row)
      end
    end

    test 'translates valid row' do
      row = CSV::Row.new(CsvToPendingGroupTranslator::EXPECTED_HEADERS, EXAMPLE_ROW_VALUES, true)

      assert_translation EXAMPLE_ROW_VALUES, CsvToPendingGroupTranslator.call(row)
    end

    test 'translates valid row with extra header' do
      row = CSV::Row.new(
        [*CsvToPendingGroupTranslator::EXPECTED_HEADERS, :extra_field],
        [*EXAMPLE_ROW_VALUES.dup, 'extra_field']
      )

      assert_translation EXAMPLE_ROW_VALUES, CsvToPendingGroupTranslator.call(row)
    end

    private

    #
    # Manually defines the translation rules that should be enforced by the service
    #
    # @param [Array] values the CSV row passed into the service
    # @param [Group] the returned active record instance from the service
    #
    def assert_translation(values, pending_group)
      expected_name = values[1]
      expected_type = values[2] == 'website' ? :other : values[2].sub(' ', '_')
      expected_lat = values[3]
      expected_lon = values[4]
      expected_link = values[5]
      expected_email = values[6]
      expected_members = values[7]
      expected_regional = values[8]

      assert_not pending_group.approved
      assert_equal expected_name, pending_group.name
      assert_equal expected_type, pending_group.type
      assert_equal expected_lat, pending_group.location.lat
      assert_equal expected_lon, pending_group.location.lon
      assert_equal expected_link, pending_group.info.link
      assert_equal expected_members, pending_group.info.members
      assert_equal expected_regional, pending_group.info.is_regional
      assert_equal expected_email, pending_group.submitter.email
    end
  end
end
