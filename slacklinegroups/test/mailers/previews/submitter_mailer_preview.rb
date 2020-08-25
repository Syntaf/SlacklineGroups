# frozen_string_literal: true

class SubmitterMailerPreview < ActionMailer::Preview
  def approved_email
    group = Group.joins(:submitter).approved.first

    SubmitterMailer.with(group: group).group_approved
  end
end
