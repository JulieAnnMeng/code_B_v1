import React from 'react'
import { Link } from 'react-router-dom'

function CommentBoard({id, comment, commentor}) {

    return (
        <div className="card container">
            &nbsp;
            <p>{comment}</p>
            <p>🙂 {commentor}</p>
        </div>
    )
}

export default CommentBoard