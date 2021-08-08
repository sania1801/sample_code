# frozen_string_literal: true

module ServicesRentWork
  module V1
    class Users < Grape::API
      resource :users do
        desc 'list of all users'
        get do
          # EXAMPLE
          users = [
            { id: 1,
              name: 'Alex',
              surname: 'Parshin' },
            { id: 2,
              name: 'Roman',
              surname: 'Gorbunov' }
          ]

          present users, with: ServicesRentWork::Entities::User
        end
      end
    end
  end
end
