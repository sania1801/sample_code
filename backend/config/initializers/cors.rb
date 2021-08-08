# frozen_string_literal: true

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001'

    resource '*',
             headers: :any,
             methods: %i[get post put patch delete options head],
             credentials: true,
             expose: %w[X-Total X-Total-Pages X-Per-Page X-Page X-Offset X-Next-Page X-Prev-Page]
  end
end
