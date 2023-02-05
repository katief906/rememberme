class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :priority
      t.datetime :due_date
      t.string :description
      t.boolean :completed, null: false
      t.belongs_to :user, null: false
      t.belongs_to :list, null: false

      t.timestamps null: false
    end
  end
end
