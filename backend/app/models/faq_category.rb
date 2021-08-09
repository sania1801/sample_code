# frozen_string_literal: true

class FaqCategory < ApplicationRecord
  has_many :faq_questions
  validates :name, presence: true
end
