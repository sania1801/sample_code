# frozen_string_literal: true

ActiveAdmin.register Cost do
  permit_params :amount, :measure_id
end
