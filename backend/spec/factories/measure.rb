# frozen_string_literal: true

FactoryBot.define do
  factory :measure do
    name { Faker::Name.name }
  end
end
