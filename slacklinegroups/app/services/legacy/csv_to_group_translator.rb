# frozen_string_literal: true

require 'csv'

module Legacy
  #
  # Creates and returns a new active record Group instance given a csv row
  # in a specific format. Intended to migrate legacy data from the previous
  # project into the modern schema created in this project.
  #
  # @param csv_row [CSV::Row]  id,name,group_type,lat,lon,link,email,members,is_regional,created_at,updated_at
  #
  # @returns [Group] an unsaved active record instance dervied from the CSV row
  #
  class CsvToGroupTranslator < ApplicationService
    EXPECTED_HEADERS = %w[id name group_type lat lon link members is_regional created_at updated_at].freeze

    attr_reader :csv_row

    class MalformedHeaderError < StandardError; end

    def initialize(csv_row)
      @csv_row = csv_row
    end

    def call
      return false unless headers_valid?

      group = Group.new(
        name: @csv_row['name'],
        type: text_to_type_enum(@csv_row['group_type']),
        approved: true
      )
      group.location = Location.new(
        lat: @csv_row['lat'],
        lon: @csv_row['lon']
      )
      group.info = Info.new(
        link: @csv_row['link'],
        members: @csv_row['members'],
        is_regional: @csv_row['is_regional']
      )

      group
    end

    private

    def headers_valid?
      header_differences = self.class::EXPECTED_HEADERS.difference(@csv_row.headers)

      return true unless header_differences.any?

      raise MalformedHeaderError, error_message(header_differences)
    end

    def error_message(differences)
      "Row is missing the following headers: #{differences}"
    end

    def text_to_type_enum(text)
      return :other if text == 'website'

      text.sub(' ', '_').to_sym
    end
  end
end
