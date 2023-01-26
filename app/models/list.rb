class List < ApplicationRecord
  validates :name, presence: true
  
  belongs_to :user
  has_many :tasks
end