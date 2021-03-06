import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import UserCard from './UserCard';

function ViewUser({user}) {
    const [userView, setUserView] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    
    let userInterests;
    let userDiscussions;
    let userComments;
    let discussion;
    let comment;
    let userViewIcon;
    let icon;

    if(user) {
        if(user.icon){
            icon = <Link to='/UserPage' className='icon'><img src={user.icon} alt="usericon" className='icon-img'/></Link>;
        } else {
            icon = <Link to='/UserPage' className='icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
        }
    }

    useEffect(() => {
        getUserView();      
    }, [id]);

    function getUserView() {
        if (user === null || parseInt(id) !== user.id){
            fetch(`/users/${id}`)
            .then((r) => r.json())
            .then((data) => setUserView(data))
            .catch((error) => console.log(error))
        } else {
            navigate('/UserPage')
        }
    }

    if (userView) {
        userInterests = userView.userPage.interests;
        userDiscussions = userView.userPage.discussions;
        userComments = userView.userPage.userComments;
        if(userView.icon){
            userViewIcon = user.icon;
        } else {
            userViewIcon = <Link to='#' className='icon'>{userView.first_name.charAt(0) + userView.last_name.charAt(0)}</Link>;
        }

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
        <>
            {userView ? 
            <>
                <h1 className="welcome"><br />
                    {user ? icon : null} 
                    <em className="welcome-2">{userView.username}'s Info Page</em>
                {user ?
                <Link to={`/DiscussionForm`} className="btn btn-primary discus-bttn bttn me-2"><br/>Start a discussion<br/></Link>
                :
                null}
                </h1> 
                <div className="container" style={{display: discussion[0] ? "block" : "none"}}>
                    <h2 className='board'>Started Discussions</h2><br />
                    {discussion}
                </div>
                <div className="container" style={{display: comment[0] ? "block" : "none"}}>
                    <h2 className='board'>Comments</h2><br />
                    {comment}
                </div>
            </>
            :
            <div className="spinner-border text-info center container" role="status"><span className="visually-hidden">Loading...</span></div>
            }
        </>
    )
}

export default ViewUser