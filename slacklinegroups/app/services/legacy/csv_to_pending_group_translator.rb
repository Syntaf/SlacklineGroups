# frozen_string_literal: true

require 'test_helper'

module Legacy
  class CsvToPendingGroupTranslator < CsvToGroupTranslator
    EXPECTED_HEADERS = %w[id name group_type lat lon link email members is_regional created_at updated_at].freeze

    def call
      group = super

      group.approved = false
      group.submitter = Submitter.new(email: @csv_row['email'])

      group
    end
  end
end
