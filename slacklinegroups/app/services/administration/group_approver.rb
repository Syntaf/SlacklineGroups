# frozen_string_literal: true

module Administration
  class GroupApprover < ApplicationService
    attr_reader :group

    def initialize(group)
      @group = group
    end

    def call
      return false unless @group.update(approved: true)

      SubmitterMailer.with(group: @group)
                     .approved_email
                     .deliver_later

      true
    end
  end
end
