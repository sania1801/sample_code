# frozen_string_literal: true

FactoryBot.define do
  factory :cost do
    amount { rand(10..500) }
    measure
  end
end
