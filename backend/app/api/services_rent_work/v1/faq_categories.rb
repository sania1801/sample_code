# frozen_string_literal: true

module ServicesRentWork
  module V1
    class FaqCategories < Grape::API
      resource :faq_categories do
        desc 'list of all faq categories with questions'
        get do
          faq_categories = FaqCategory.includes(:faq_questions)

          present faq_categories, with: ServicesRentWork::Entities::FaqCategory
        end
      end
    end
  end
end

