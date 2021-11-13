import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CommentBoard from './CommentBoard';


function Discussion({user, addInterest, board}) {
    const { id } = useParams();
    const navigate = useNavigate();

    let commentAvailable;
    let commentAlert = "Login or signup to participate";
    let discussion;
    let interestCount;
    let welcome;
    let tableHeader;
    let commentBoard;
    let interestStar;
    let icon;
    let commentorIcon;

    if(board){  
        discussion = board.find(discussion => discussion.id === parseInt(id));
        interestCount = discussion.interests.length;
        commentAvailable = `${discussion.comments.length} comments below. Join the discussion!`;
        if(discussion.user.icon){
            commentorIcon = discussion.user.icon;
        } else {
            commentorIcon = discussion.user.first_name.charAt(0) + discussion.user.last_name.charAt(0);
        }
        let comments; 
        if(discussion.comments){
            comments = discussion.comments;
            commentBoard = comments.map(entry => {
                console.log(entry)
            return (
                <CommentBoard 
                    key={entry.id}
                    id={entry.id}
                    logOn={user}
                    comment={entry.comment}
                    commentor={entry.commentor}
                />
            )})
        } else {
            commentAvailable = 'No comments available';
            commentBoard = null;
        }
    }

    if (user) {
        if(user.icon){
            icon = user.icon;
        } else {
            icon = <Link to='/UserPage' className='icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
        }
        interestStar = user.userPage.interests.find(interest => interest.discussion_id === parseInt(id)) ? true : false;
        console.log(interestStar)
        // welcome = <Link to='/UserPage' className='welcome'> {🙂} {user.first_name}</Link>
        tableHeader = commentAvailable
    } else {
        welcome = null;
        tableHeader = commentAlert
    }

    function handleInterest(e) {
        e.preventDefault();
        if(user) {
            let notAlreadyInterested = user.userPage.interests.find(interest => interest.discussion_id === parseInt(id)) ? false : true;
            if (notAlreadyInterested){
                let user_id = user.id;
                let discussion_id = id;
                addInterest(user_id, discussion_id);
            } else {
                console.log("Already interested")
            }
        } else {
            navigate('/Login')
        }
    }


        return (
             <div className="container">
                {discussion ?  
                    <>
                        &nbsp;
                        <br /><br /><h1 className='welcome'>Welcome {user ? user.username + ' '  : null}to Code <span>B</span></h1><br /><br />
                        {user ?
                        <div className="d-grid gap-2 d-md-block">
                            {icon}
                            <Link to={`/DiscussionForm`} className="btn btn-primary btn-outline-success bttn me-2"><br/>Start a discussion<br/></Link>
                        </div>    
                        : null}
                        <br /><br /><h4 className='board'>{discussion.topic}</h4>
                        &nbsp;               
                        <div className="card container">
                            <p>{discussion.discussion}</p>
                            <p><Link to={`/ViewUser/${discussion.user.id}`} className='small-icon'>{commentorIcon}</Link> {discussion.user.username}</p>  
                            &nbsp;  
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary bttn2" onClick={handleInterest}>{ interestStar ? " ★ " : " ☆ " }<span className="badge bg-secondary">{interestCount}</span> Interests</button>
                                &nbsp; &nbsp;
                                <Link to={user ? `/CommentForm/${id}` : `/Login`} className="btn btn-primary bttn2"><span className="badge bg-secondary">{discussion.comments.length}</span> Comments</Link>
                            </div>
                            &nbsp;
                        </div>
                        <div> 
                            &nbsp;
                            <h4 className="board" >Comments</h4>
                            &nbsp;
                            &nbsp;
                            <div className="card container info-alert"><br/>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>{tableHeader}</th>
                                            <td className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                {user ?
                                                <Link to={`/CommentForm/${id}`} className="btn btn-primary bttn2">Comment</Link>
                                                :
                                                <>
                                                    <Link to={`/Login`} className="btn btn-primary bttn2">Login</Link>
                                                    <Link to={`/Signup`} className="btn btn-primary bttn2">Signup</Link> 
                                                </>
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table><br /><br />                       
                            {commentBoard} 
                            </div>
                        </div>
                    </>
                : 
                    <div className="spinner-border text-info center container" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> }
                    &nbsp; 
            </div>       
    )
}

export default Discussion