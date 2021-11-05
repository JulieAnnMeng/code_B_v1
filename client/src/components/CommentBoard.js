import React from 'react'
// import { Link } from 'react-router-dom'

function CommentBoard({comment, commentor}) {

    return (
        <div className="card">
            <p>{comment}</p>
            <p>🙂 {commentor}</p>
        </div>
    )
}

export default CommentBoard