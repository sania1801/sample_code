# frozen_string_literal: true

class FaqCategory < ApplicationRecord
  validates :name, presence: true
end
