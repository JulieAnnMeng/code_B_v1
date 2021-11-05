class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :commentor
  has_one :user
  has_one :discussion

  def commentor
    return object.user.username
  end
end
