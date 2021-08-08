# frozen_string_literal: true

class HelpRequest < ApplicationRecord
  validates :first_name, presence: true
  validates :question, presence: true
  validates :phone, presence: true, phone: true
end
