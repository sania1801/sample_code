# frozen_string_literal: true

class Grade < ApplicationRecord
  validates :name, presence: true
end
