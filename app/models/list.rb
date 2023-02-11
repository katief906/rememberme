class List < ApplicationRecord
  validates :name, presence: true
  validates :icon, presence: true
  validates :color, presence: true
  
  belongs_to :user
  has_many :tasks
end