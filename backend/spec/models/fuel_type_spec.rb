# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FuelType, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:specification) }
  end
end
