# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    can :manage, :all if user.is_a?(Overseer)

    if user.is_a?(Moderator)
      can :update, Group
    end
  end
end
