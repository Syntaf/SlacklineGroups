# frozen_string_literal: true

require 'test_helper'

module Administration
  class GroupApproverTest < ActiveSupport::TestCase
    include ActionMailer::TestHelper
    test 'approves valid unapproved group' do
      group = groups(:two)

      assert_enqueued_email_with SubmitterMailer, :approved_email, args: { group: group } do
        assert GroupApprover.call(group)
      end

      assert group.approved
    end

    test 'does not email already approved groups' do
      group = groups(:one)

      assert_no_enqueued_emails do
        assert GroupApprover.call(group)
      end

      assert group.approved
    end

    test 'does not email on update fail' do
      group = groups(:two)

      group.stub :update, false do
        assert_no_enqueued_emails do
          assert_not GroupApprover.call(group)
        end

        assert_not group.approved
      end
    end
  end
end
