# frozen_string_literal: true

FactoryBot.define do
  factory :car do
    name { Faker::Name.name }
    year { rand(1990..2021) }
    power { rand(100..300) }
    consumption { rand(10..50) }
    status { 'draft' }
    fuel_type
    cost
    grade
    user
  end
end
