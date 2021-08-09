# frozen_string_literal: true

module ServicesRentWork
  module Entities
    class FaqQuestion < Grape::Entity
      expose :id
      expose :question
      expose :answer
      expose :faq_category_id
    end
  end
end
