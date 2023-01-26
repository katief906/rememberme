class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :name, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
