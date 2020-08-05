# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :reload_rails_admin, if: :rails_admin_path?

  private

  def reload_rails_admin
    models = %w[Admin Group Info Location Submitter]
    models.each do |m|
      RailsAdmin::Config.reset_model(m)
    end
    RailsAdmin::Config::Actions.reset

    load(Rails.root.join('config/initializers/rails_admin.rb'))
  end

  def rails_admin_path?
    controller_path =~ /rails_admin/ && Rails.env.development?
  end
end
