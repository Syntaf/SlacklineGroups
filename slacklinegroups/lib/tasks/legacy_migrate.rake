# frozen_string_literal: true

# rubocop:disable Metrics/BlockLength

namespace :legacy do
  desc 'Import exported groups from a legacy Slacklinegroups database in CSV format'

  task :import_approved, %i[groups_file] => :environment do |_t, args|
    require 'csv'

    unless args.groups_file
      puts 'Usage: rake legacy_migrate:import[groups_file.csv]'
      next
    end

    groups = []
    parse_csv(args.groups_file) do |row|
      groups << Legacy::CsvToGroupTranslator.call(row)
    end

    groups.each(&:save!)
  end

  task :import_pending, %i[pending_groups_file] => :environment do |_t, args|
    require 'csv'

    unless args.pending_groups_file
      puts 'Usage: rake legacy:import_pending[pending_groups_file.csv]'
      next
    end

    pending_groups = []
    parse_csv(args.pending_groups_file) do |row|
      pending_groups << Legacy::CsvToPendingGroupTranslator.call(row)
    end

    pending_groups.each(&:save!)
  end

  def parse_csv(file)
    csv_file = File.read(file)

    CSV.parse(csv_file, headers: true).each { |row| yield row }
  end
end

# rubocop:enable Metrics/BlockLength
