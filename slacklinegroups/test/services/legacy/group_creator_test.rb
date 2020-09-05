# frozen_string_literal: true

require 'test_helper'
require 'csv'

module Legacy
  class CsvToGroupTranslatorTest < ActiveSupport::TestCase
    EXAMPLE_ROW_VALUES = [
      1,
      'Test Group',
      'facebook group',
      12.4,
      10.6,
      'https://facebook.com',
      0,
      true,
      '2020-05-25 06:54:21.286147',
      '2020-05-25 06:54:21.286147'
    ].freeze

    test 'rejects missing headers' do
      row = CSV::Row.new(%i[id name group_type], [1, 'test', 'facebook group'], true)

      assert_raises CsvToGroupTranslator::MalformedHeaderError do
        CsvToGroupTranslator.call(row)
      end
    end

    test 'rejects malformed headers' do
      headers = CsvToGroupTranslator::EXPECTED_HEADERS.dup
      headers[0] = :idzz

      row = CSV::Row.new(headers, EXAMPLE_ROW_VALUES, true)

      assert_raises CsvToGroupTranslator::MalformedHeaderError do
        CsvToGroupTranslator.call(row)
      end
    end

    test 'translates row' do
      row = CSV::Row.new(CsvToGroupTranslator::EXPECTED_HEADERS, EXAMPLE_ROW_VALUES, true)

      assert_translation EXAMPLE_ROW_VALUES, CsvToGroupTranslator.call(row)
    end

    test 'accepts additional headers' do
      row = CSV::Row.new(
        [*CsvToGroupTranslator::EXPECTED_HEADERS, :extra_field],
        [*EXAMPLE_ROW_VALUES.dup, 'extra_field']
      )

      assert_translation EXAMPLE_ROW_VALUES, CsvToGroupTranslator.call(row)
    end

    private

    #
    # Manually defines the translation rules that should be enforced by the service
    #
    # @param [Array] values the CSV row passed into the service
    # @param [Group] the returned active record instance from the service
    #
    def assert_translation(values, group)
      expected_name = values[1]
      expected_type = values[2] == 'website' ? :other : values[2].sub(' ', '_')
      expected_lat = values[3]
      expected_lon = values[4]
      expected_link = values[5]
      expected_members = values[6]
      expected_regional = values[7]

      assert_equal expected_name, group.name
      assert_equal expected_type, group.type
      assert_equal expected_lat, group.location.lat
      assert_equal expected_lon, group.location.lon
      assert_equal expected_link, group.info.link
      assert_equal expected_members, group.info.members
      assert_equal expected_regional, group.info.is_regional
    end
  end
end
