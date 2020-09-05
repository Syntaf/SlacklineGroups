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
      row = CSV::Row.new(%w[id name group_type], [1, 'test', 'facebook group'], true)

      assert_raises CsvToPendingGroupTranslator::MalformedHeaderError do
        CsvToGroupTranslator.call(row)
      end
    end

    test 'rejects malformed headers' do
      headers = CsvToPendingGroupTranslator::EXPECTED_HEADERS.dup
      headers[6] = :emailzzz

      row = CSV::Row.new(headers, EXAMPLE_ROW_VALUES, true)

      assert_raises CsvToPendingGroupTranslator::MalformedHeaderError do
        CsvToPendingGroupTranslator.call(row)
      end
    end
  end
end
