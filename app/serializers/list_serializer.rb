class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :icon, :color, :user_id, :tasks

  belongs_to :user
end
