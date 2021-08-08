# frozen_string_literal: true

class User < ApplicationRecord
  has_many :cars, dependent: :destroy

  validates :email, uniqueness: true
  validates :phone, presence: true, uniqueness: true
  validates :sign_in_count, presence: true
end
