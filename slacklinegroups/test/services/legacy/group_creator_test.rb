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

    test 'accepts additional headers' do
      row = CSV::Row.new(
        [*CsvToGroupTranslator::EXPECTED_HEADERS, :extra_field],
        [*EXAMPLE_ROW_VALUES.dup, 'extra_field']
      )

      assert_translation EXAMPLE_ROW_VALUES, CsvToGroupTranslator.call(row)
    end

    private

    def assert_translation(values, group)
      assert_equals values.second, group.name
    end
  end
end
