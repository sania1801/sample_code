# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FaqQuestion, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:question) }
    it { should validate_presence_of(:answer) }
  end
end
