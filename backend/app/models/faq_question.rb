# frozen_string_literal: true

class FaqQuestion < ApplicationRecord
  belongs_to :faq_category

  validates :question, presence: true
  validates :answer, presence: true
end
