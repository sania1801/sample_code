# frozen_string_literal: true

class Car < ApplicationRecord
  include AASM

  belongs_to :user
  belongs_to :fuel_type
  belongs_to :cost
  belongs_to :grade, optional: true

  validates :name, presence: true
  validates :year, presence: true

  aasm column: :status do
    state :draft, initial: true
    state :ready_to_publish, :published, :approved, :rejected, :archived

    event :send_to_moderate do
      transitions from: :draft, to: :ready_to_publish
    end

    event :approve do
      transitions from: :ready_to_publish, to: :approved
    end

    event :reject do
      transitions from: :ready_to_publish, to: :rejected
    end

    event :publish do
      transitions from: :approved, to: :published
    end

    event :refact do
      transitions from: :rejected, to: :draft
    end

    event :archive do
      transitions from: :published, to: :archived
    end
  end
end
