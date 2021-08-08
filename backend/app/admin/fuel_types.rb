# frozen_string_literal: true

ActiveAdmin.register FuelType do
  permit_params :name, :specification
end
