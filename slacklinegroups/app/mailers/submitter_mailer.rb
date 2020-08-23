# frozen_string_literal: true

class SubmitterMailer < ApplicationMailer
  default from: "noreply@#{ENV['SENDGRID_DOMAIN']}"

  def group_approved
    @group = params[:group]

    mail(to: @group.submitter.email, subject: 'Group successfully submitted')
  end
end
