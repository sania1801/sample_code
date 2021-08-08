# frozen_string_literal: true

ActiveAdmin.register Car do
  permit_params :name, :year, :power, :consumption, :fuel_type_id, :cost_id, :grade_id, :status
end
