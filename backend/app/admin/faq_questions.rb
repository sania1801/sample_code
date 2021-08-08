# frozen_string_literal: true

ActiveAdmin.register FaqQuestion do
  permit_params :question, :answer, :faq_category_id
end
