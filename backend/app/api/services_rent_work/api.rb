# frozen_string_literal: true

module ServicesRentWork
  class Api < Grape::API
    prefix 'api'
    format :json
    PER_PAGE = 10

    mount V1::Base
    add_swagger_documentation
  end
end
