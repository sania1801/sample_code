# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Car, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:year) }
  end

  describe 'status changing' do
    let(:car) { build(:car) }
    it { expect(car).to transition_from(:draft).to(:ready_to_publish).on_event(:send_to_moderate) }
    it { expect(car).to transition_from(:ready_to_publish).to(:approved).on_event(:approve) }
    it { expect(car).to transition_from(:ready_to_publish).to(:rejected).on_event(:reject) }
    it { expect(car).to transition_from(:approved).to(:published).on_event(:publish) }
    it { expect(car).to transition_from(:rejected).to(:draft).on_event(:refact) }
    it { expect(car).to transition_from(:published).to(:archived).on_event(:archive) }
  end
end
