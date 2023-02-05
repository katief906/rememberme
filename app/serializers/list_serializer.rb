class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :tasks

  belongs_to :user
end
