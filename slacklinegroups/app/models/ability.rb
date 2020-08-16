# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action :create, :read, :update, :show_in_app, to: :moderate

    if user.is_a?(Overseer)
      can :manage, :all if user.is_a?(Overseer)
    elsif user.is_a?(Moderator)
      can :access, :rails_admin
      can :read, :dashboard

      can :moderate, [Group, Location, Info]
    end
  end
end
