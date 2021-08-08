# frozen_string_literal: true

class Measure < ApplicationRecord
  validates :name, presence: true
end
