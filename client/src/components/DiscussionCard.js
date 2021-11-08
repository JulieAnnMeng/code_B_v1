import React from 'react'
import { Link } from 'react-router-dom'


function DiscussionCard({logOn, id, topic, discussion, user, commentCount, interestCount, comments}) {
    
        return (
            <div className="card">
                <Link to={`/Discussion/${id}`} className="title" > {topic} </Link>
                <p>{discussion}</p>
                <p>🙂 {user}</p>
                <div className="d-grid gap-2 d-md-block">
                    <Link to={`/Discussion/${id}`} className="btn btn-primary bttn2">☆ <span className="badge bg-secondary">{interestCount}</span> Interests</Link>
                    &nbsp; &nbsp;
                    <Link to={logOn ? `/CommentForm/${id}` : `/Discussion/${id}`} className="btn btn-primary bttn2"><span className="badge bg-secondary">{commentCount}</span> Comments</Link>
                </div>
            </div>       
    )
}

export default DiscussionCard