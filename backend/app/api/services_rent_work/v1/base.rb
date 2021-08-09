# frozen_string_literal: true

module ServicesRentWork
  module V1
    class Base < Grape::API
      format :json

      version 'v1' do
        mount ServicesRentWork::V1::Users
        mount ServicesRentWork::V1::FaqCategories
      end
    end
  end
end
