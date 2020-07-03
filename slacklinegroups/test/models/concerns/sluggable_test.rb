# frozen_string_literal: true

class SluggableTest < ActiveSupport::TestCase
  include Sluggable

  def run
    stub :generate_unique, '12345' do
      super
    end
  end

  test 'creates url friendly slug' do
    assert_equal 'test-group-12345', generate_slug('test group')
  end

  test 'lowercases text' do
    assert_equal 'test-group-12345', generate_slug('TeSt gRoUP')
  end

  test 'trims spaces' do
    assert_equal 'test-group-12345', generate_slug('  test      group')
  end

  test 'remove unfriendly characters' do
    ['@', '!', '\'', '"', '?', ';'].each do |illegal_character|
      assert_equal 'test-group-12345', generate_slug("#{illegal_character}test group")
    end
  end
end
