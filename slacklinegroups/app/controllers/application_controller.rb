# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :set_meta
  before_action :reload_rails_admin, if: :rails_admin_path?
  after_action :allow_framing, if: :embeded_view?

  private

  def set_meta
    @page_title = 'SlacklineGroups - Map'
    @page_description = 'Search from over 1,400 Slackline communities across the globe and connect with other slackliners and highliners'
    @page_keywords = 'Slackline, Highline, Community, Map'

    set_meta_tags canonical: request.protocol + request.domain if embeded_view?
    set_meta_tags index: true
  end

  def embeded_view?
    request.subdomain == 'api'
  end

  def allow_framing
    response.headers['X-FRAME-OPTIONS'] = 'ALLOWALL'
  end

  def rails_admin_path?
    controller_path =~ /rails_admin/ && Rails.env.development?
  end

  def reload_rails_admin
    RailsAdmin::Config.reset

    load(Rails.root.join('config/initializers/rails_admin.rb'))
    load(Rails.root.join('lib/rails_admin/bulk_approve_action.rb'))

    models = %w[Overseer Moderator Group Info Location Submitter]
    models.each do |m|
      Object.send(:remove_const, m)

      file_path = m.to_s.underscore
      load(Rails.root.join("app/models/#{file_path}.rb"))
    end
  end
end
