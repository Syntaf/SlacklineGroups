# frozen_string_literal: true

namespace :legacy_migrate do
  desc 'Import exported groups from a legacy Slacklinegroups database in CSV format'

  task :import, %i[groups_file pending_groups_file] => :environment do |_t, args|
    require 'csv'

    print_usage and next unless args.group_file

    handle_groups(args.groups_file)
    handle_pending_groups(args.pending_groups_file) if args.pending_groups_file
  end

  def handle_groups(group_file_name)
    groups = []
    csv_file = File.read(group_file_name)

    CSV.parse(csv_file, headers: true).each do |row|
      groups << CsvToGroupTranslator.call(row)
    end

    groups.each(&save!)
  rescue CsvToGroupTranslator::MalformedHeaderError
    puts 'Invalid headers detected!'
  end

  def handle_pending_groups(pending_group_file_name)
    csv_file = File.read(pending_group_file_name)

    CSV.parse(csv_file, headers: true).each do |row|
      # TODO
    end
  end

  def print_usage
    puts 'Usage: rake legacy_migrate:import[groups_file.csv, pending_groups_file.csv || null>]'
  end
end
