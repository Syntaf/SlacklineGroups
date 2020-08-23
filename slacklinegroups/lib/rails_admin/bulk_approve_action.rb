# frozen_string_literal: true

module RailsAdmin
  module Config
    module Actions
      class BulkApprove < RailsAdmin::Config::Actions::Base
        RailsAdmin::Config::Actions.register(RailsAdmin::Config::Actions::BulkApprove)

        register_instance_option :collection? do
          true
        end

        register_instance_option :bulkable? do
          true
        end

        register_instance_option :http_methods do
          [:post]
        end

        register_instance_option :controller do
          proc do
            list_entries(@model_config).update(approved: true)

            flash[:notice] = 'Selected groups successfully approved'
            redirect_to index_path
          end
        end
      end
    end
  end
end
