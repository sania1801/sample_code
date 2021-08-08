# frozen_string_literal: true

ActiveAdmin.register HelpRequest do
  permit_params :first_name, :question, :phone
end
