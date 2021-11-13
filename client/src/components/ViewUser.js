import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserCard from './UserCard';

function ViewUser({user}) {
    const [update, setUpdate] = useState(false);
    const [userView, setUserView] = useState(null);
    const { id } = useParams();
    
    let userInterests;
    let userDiscussions;
    let userComments;
    let discussion;
    let comment;

    useEffect(() => {
        getUserView();
    }, [id]);

    function getUserView() {
        fetch(`/users/${id}`)
        .then((r) => r.json())
        .then((data) => {
            setUserView(data);
            })
        .catch((error) => console.log(error))
    }

    if (userView) {
        userInterests = userView.userPage.interests;
        userDiscussions = userView.userPage.discussions;
        userComments = userView.userPage.userComments;
        let userType = 'userView';

        discussion = userDiscussions.map(discussion => {
            let type = "discussion";
            if (discussion !== null) {
                return (
                    <UserCard
                        key={discussion.id}
                        id={discussion.id}
                        type={type}
                        topic={discussion.topic}
                        discussion={discussion.discussion}
                        date={discussion.discussion_date}
                        user={userType}
                    />
                )
            }
        })
        comment = userComments.map(comment => {
            let type = "comment";
            if (comment !== null) {
                return (
                    <UserCard 
                        key={comment.id}
                        id={comment.id}
                        discussion_id={comment.discussion_id}
                        type={type}
                        topic={comment.discussion_topic}
                        discussion={comment.discussion}
                        comment={comment.comment}
                        date={comment.comment_date}
                        user={userType}
                    />
                )
            }
        })
    }

    return (
        <div className="container">
            &nbsp;
            &nbsp;
            {user && userView ? 
            <>
                <div className="card container">
                    <br /><h1 className="board">🙂 Welcome {user.first_name}</h1><br />
                    <br /><h1 className="welcome">🙂 {userView.first_name} Info</h1><br />
                </div>
                &nbsp;
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link to={`/DiscussionForm`} className="btn btn-primary btn-outline-success bttn me-2"><br/>Start a discussion<br/></Link>
                </div>
                
                &nbsp;
                <div className="card container"><br />
                    <h2 className='board'>Started Discussions</h2><br />
                    <div className="container">
                        {discussion}
                    </div>
                </div>
                &nbsp;
                <div className="card container"><br />
                    <h2 className='board'>Comments</h2><br />
                    <div className="container">
                        {comment}
                    </div>
                </div>
            </>
            :
            <div className="spinner-border text-info center container" role="status"><span className="visually-hidden">Loading...</span></div>
            }
            
        </div>
    )
}

export default ViewUser