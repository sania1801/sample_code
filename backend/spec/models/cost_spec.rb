# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Cost, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:amount) }
  end
end
