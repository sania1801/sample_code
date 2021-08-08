# frozen_string_literal: true

require 'rails_helper'

RSpec.describe HelpRequest, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:question) }
    it { should validate_presence_of(:phone) }
  end
end
