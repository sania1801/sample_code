# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    name { Faker::Name.name }
    last_name { Faker::Name.name }
    legal_entity { false }
    sign_in_count { 1 }
    current_sign_in { Time.zone.now }
    last_sign_in_at { Time.zone.now }
    current_sign_in_ip { Array.new(4) { rand(256) }.join('.') }
    last_sign_in_ip { Array.new(4) { rand(256) }.join('.') }
    encrypted_password { '' }
    reset_password_token { Time.zone.now }
    reset_password_sent_at { Time.zone.now }
    phone { Faker::PhoneNumber.cell_phone_in_e164 }
  end
end
