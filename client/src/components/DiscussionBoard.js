import React from 'react'
// import { Link } from 'react-router-dom'
import CommentBoard from './CommentBoard'

function DiscussionBoard({topic, discussion, user, comments, interests}) {
    let commentCount = comments.length;
    let interestCount = interests.length;
    // debugger;
    console.log(discussion)
    console.log(comments)
    
    let commentBoard = comments.map(entry => {
        return (
            <CommentBoard 
                key={entry.id}
                comment={entry.comment}
                commentor={entry.commentor}
            />
        )
    })
    
        return (
            <div className="card">
                <h4 className="title">{topic}</h4>
                <p>{discussion}</p>
                <p>🙂 {user}</p>
                <div class="d-grid gap-2 d-md-block">
                    <button type="button" class="btn btn-primary">☆ <span class="badge bg-secondary">{interestCount}</span> Interests</button>
                    &nbsp; &nbsp;
                    <button type="button" class="btn btn-primary"><span class="badge bg-secondary">{commentCount}</span> Comments</button>
                </div>
                {commentBoard}
            </div>       
    )
}

export default DiscussionBoard