class CreateFaqQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :faq_questions do |t|
      t.string :question, null: false
      t.text :answer, null: false
      t.references :faq_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
