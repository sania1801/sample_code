# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject { build(:user) }
    it { should validate_presence_of(:phone) }
    it { should validate_presence_of(:sign_in_count) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_uniqueness_of(:phone).case_insensitive }
  end
end
