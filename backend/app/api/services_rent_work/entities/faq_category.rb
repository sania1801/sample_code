# frozen_string_literal: true

module ServicesRentWork
  module Entities
    class FaqCategory < Grape::Entity
      expose :id
      expose :name
      expose :faq_questions, using: FaqQuestion
    end
  end
end
