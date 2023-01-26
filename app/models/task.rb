class Task < ApplicationRecord
  validates :title, presence: true
  validates :completed, presence: true
  validates :completed, exclusion [true], on: :create
  validates :completed, inclusion [true, false], on: :update

  belongs_to :list
end