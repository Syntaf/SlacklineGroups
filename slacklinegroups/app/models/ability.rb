# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    if user.is_a?(Overseer)
      can :manage, :all if user.is_a?(Overseer)
    elsif user.is_a?(Moderator)
      can :access, :rails_admin
      can :read, :dashboard

      can :create, Group
      can :read, Group
      can :update, Group
    end
  end
end
