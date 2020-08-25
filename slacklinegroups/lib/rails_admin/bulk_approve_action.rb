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
            groups_to_approve = list_entries(@model_config)

            if groups_to_approve.update(approved: true)
              groups_to_approve.each do |group|
                SubmitterMailer.with(group: group)
                               .approved_email
                               .deliver_later
              end
              flash[:notice] = 'Selected groups successfully approved'
            else
              flash[:error] = 'Something went wrong :('
            end

            redirect_to index_path
          end
        end
      end
    end
  end
end
