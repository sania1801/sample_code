# frozen_string_literal: true

FactoryBot.define do
  factory :fuel_type do
    name { Faker::Name.name }
    specification { Faker::Name.name }
  end
end
