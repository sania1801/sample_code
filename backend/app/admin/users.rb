# frozen_string_literal: true

ActiveAdmin.register User do
  permit_params :email, :name, :last_name, :legal_entity, :sign_in_count, :current_sign_in, :last_sign_in_at,
                :current_sign_in_ip, :last_sign_in_ip, :encrypted_password, :reset_password_token,
                :reset_password_sent_at, :phone

  index do
    selectable_column
    column :email
    column :name
    column :phone
    column :last_name
    column :legal_entity
    column :sign_in_count
    column :current_sign_in
    column :last_sign_in_at
    actions
  end
end
