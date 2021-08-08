# frozen_string_literal: true

class Cost < ApplicationRecord
  belongs_to :measure

  validates :amount, presence: true
end
