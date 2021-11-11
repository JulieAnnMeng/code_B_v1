import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function DiscussionCard({user, addInterest, interestStar, id, topic, discussion, username, commentCount, interestCount, interests}) {
    const navigate = useNavigate();
    
    function handleInterest(e) {
        e.preventDefault();
        if(user) {
            let notAlreadyInterested = interests.find(interest => interest.discussion_id === id) ? false : true;
            if (notAlreadyInterested){
                let user_id = user.id;
                let discussion_id = id;
                interestCount += 1;
                addInterest(user_id, discussion_id);
            } else {
                console.log("Already interested")
            }            
        } else {
            navigate('/Login')
        }
    }
    
        return (
            <div className="card"><br/>
                <Link to={`/Discussion/${id}`} className="title"  > {topic} </Link><br/>
                <p>{discussion}</p>
                <p>🙂 {username}</p>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary bttn2" onClick={handleInterest} >{interestStar ? " ★ " : " ☆ " } <span className="badge bg-secondary">{interestCount}</span> Interests</button>
                    &nbsp; &nbsp;
                    <Link to={user ? `/CommentForm/${id}` : `/Discussion/${id}`} className="btn btn-primary bttn2"><span className="badge bg-secondary">{commentCount}</span> Comments</Link>
                </div><br/>
            </div>       
    )
}

export default DiscussionCard