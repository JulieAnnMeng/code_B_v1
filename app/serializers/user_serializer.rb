class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :userPage

  def userPage   
    userDiscussions = object.discussions
    # only return interests taht are not part of discussions
    userInterests = object.interests.map{|interest| interest.discussion}
    userComments = object.comments.map{|comment| comment}
    userCommentDiscussion = object.comments.map{|comment| comment.discussion}
    userpage = {interests: userInterests, discussions: userDiscussions, userComments: [comments: userComments, discussions: userCommentDiscussion]}
    return userpage
  end
end
