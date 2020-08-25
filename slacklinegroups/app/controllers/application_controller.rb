# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :reload_rails_admin, if: :rails_admin_path?

  private

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

  def rails_admin_path?
    controller_path =~ /rails_admin/ && Rails.env.development?
  end
end
