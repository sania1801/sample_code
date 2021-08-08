# frozen_string_literal: true

module ServicesRentWork
  module Entities
    class User < Grape::Entity
      expose :id
      expose :name
      expose :surname
    end
  end
end
