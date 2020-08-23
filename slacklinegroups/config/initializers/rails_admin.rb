# frozen_string_literal: true

require 'rails_admin/bulk_approve_action'

RailsAdmin.config do |config|
  config.parent_controller = 'ApplicationController'
  config.main_app_name = ['Slacklinegroups', 'Moderation Panel']

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :admin
  end
  config.current_user_method(&:current_admin)

  ## == CancanCan ==
  config.authorize_with :cancancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    edit
    delete
    show_in_app

    bulk_approve do
      only ['Group']
    end

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
