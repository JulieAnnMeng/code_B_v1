import React from 'react'
import { Link } from 'react-router-dom'

function CommentBoard({id, comment, commentor}) {
    let icon;

    if(commentor) {
        if(commentor.icon){
            icon = <Link to={`/ViewUser/${commentor.id}`}><img src={commentor.icon} alt="usericon" className='icon-img-small'/></Link>
        } else {
            icon = <Link to={`/ViewUser/${commentor.id}`} className='small-icon'>{commentor.first_name.charAt(0) + commentor.last_name.charAt(0)}</Link>;
        }
    }
    console.log(commentor)

    return (
        <>
            <div className="card">
                &nbsp;
                <p className="txt">{comment}</p>
                <p>{icon} <span>{commentor.user}</span></p>
            </div><br />
        </>
    )
}

export default CommentBoard