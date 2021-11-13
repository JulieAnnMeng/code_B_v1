import React from 'react'
import { Link } from 'react-router-dom'

function CommentBoard({id, comment, commentor}) {
    let icon;

    if(commentor) {
        if(commentor.icon){
            icon = commentor.icon;
        } else {
            icon = <Link to={`/ViewUser/${commentor.id}`} className='small-icon'>{commentor.first_name.charAt(0) + commentor.last_name.charAt(0)}</Link>;
        }
    }

    return (
        <div className="card container">
            &nbsp;
            <p>{comment}</p>
            <p>{icon} {commentor.user}</p>
        </div>
    )
}

export default CommentBoard