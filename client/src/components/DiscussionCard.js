import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function DiscussionCard({logOn, addInterest, id, topic, discussion, user, commentCount, interestCount, setInterestCount, comments}) {
    const navigate = useNavigate();

    function handleInterest(e) {
        e.preventDefault();
        
        if(logOn) {
            let user_id = logOn.id;
            let discussion_id = id;
            setInterestCount(interestCount + 1)
            addInterest(user_id, discussion_id);
        } else {
            navigate('/Login')
        }
    }
    
        return (
            <div className="card"><br/>
                <Link to={`/Discussion/${id}`} className="title"  > {topic} </Link><br/>
                <p>{discussion}</p>
                <p>🙂 {user}</p>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary bttn2" onClick={handleInterest} >☆ <span className="badge bg-secondary">{interestCount}</span> Interests</button>
                    &nbsp; &nbsp;
                    <Link to={logOn ? `/CommentForm/${id}` : `/Discussion/${id}`} className="btn btn-primary bttn2"><span className="badge bg-secondary">{commentCount}</span> Comments</Link>
                </div><br/>
            </div>       
    )
}

export default DiscussionCard