import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';

function UserPage({user, getUser}) {
    const [update, setUpdate] = useState(false);
    
    let userInterests;
    let userDiscussions;
    let userComments;
    let interested
    let discussion;
    let comment;
    let icon;
    
    useEffect(() => {
        getUser();
        setUpdate(false);
    }, [update]);

    function deleteTypeSwitch(type, id) {
        switch(type) {
            case 'interest':
                fetch(`/interests/${id}`, {
                    method: 'DELETE'
                })
                .then(setUpdate(true))
                .catch(err => console.log(err))
                break;
            case 'discussion':
                fetch(`/discussions/${id}`, {
                    method: 'DELETE',
                })
                .then(setUpdate(true))
                .catch(err => console.log(err))
                break;
            case 'comment':
                 fetch(`/comments/${id}`, {
                    method: 'DELETE',
                })
                .then(setUpdate(true))
                .catch(err => console.log(err))
                break;
            default:
                console.log(type)
                console.log(id)
                debugger;
        }
    }

    if (user) {
        userInterests = user.userPage.interests;
        userDiscussions = user.userPage.discussions;
        userComments = user.userPage.userComments;
        let userType = 'user';

        interested = userInterests.map(interest => {
            let type = "interest";
            if (interest !== null) {
                return (
                    <UserCard
                        key={interest.id}
                        id={interest.discussion_id}
                        interest_id={interest.id}
                        type={type}
                        topic={interest.topic}
                        discussion={interest.discussion}
                        user={userType}
                        date={interest.interested_date}
                        deleteTypeSwitch={deleteTypeSwitch}
                        setUpdate={setUpdate}
                    />
            )
        }        
    })
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
                        user={userType}
                        date={discussion.discussion_date}
                        deleteTypeSwitch={deleteTypeSwitch}
                        setUpdate={setUpdate}
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
                        user={userType}
                        comment={comment.comment}
                        date={comment.comment_date}
                        deleteTypeSwitch={deleteTypeSwitch}
                        setUpdate={setUpdate}
                    />
                )
            }
        })
    }

    if (user){
        if(user.icon){
            icon = user.icon;
        } else {
            icon = <Link to={`/ViewUser/${user.id}`} className='icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
        }
    } else {getUser()}

    return (
        <div className="container">
            &nbsp;
            &nbsp;
            {user ? 
            <>
                <div className="card container">
                    <br /><h1 className="welcome">{icon} Welcome {user.first_name + ' ' + user.last_name}</h1><br />
                </div>
                &nbsp;
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link to={`/DiscussionForm`} className="btn btn-primary btn-outline-success bttn me-2"><br/>Start a discussion<br/></Link>
                </div>
                
                &nbsp;
                <div className="card container"><br />
                    <h2 className='board'>Interested Discussions</h2><br />
                    <div className="container">
                        {interested}
                    </div>
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

export default UserPage