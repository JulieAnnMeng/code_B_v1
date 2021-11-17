import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CommentBoard from './CommentBoard';


function Discussion({user, addInterest, board}) {

    const { id } = useParams();
    const navigate = useNavigate();

    // add useEffect to grab discussions

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
        if (discussion){
            interestCount = discussion.interests.length;
            commentAvailable = `${discussion.comments.length} comments below. Join the discussion!`;
            if(user){
                if(discussion.user.icon){
                    commentorIcon = <Link to={`/ViewUser/${discussion.user.id}`}><img src={discussion.user.icon} alt="usericon" className='icon-img-small'/></Link>;
                } else {
                    commentorIcon = <Link to={`/ViewUser/${discussion.user.id}`} className='small-icon'>{discussion.user.first_name.charAt(0) + discussion.user.last_name.charAt(0)}</Link>
                }
            } else {
                if(discussion.user.icon){
                    commentorIcon = <Link to={`/Login`}><img src={discussion.user.icon} alt="usericon" className='icon-img-small'/></Link>;
                } else {
                    commentorIcon = <Link to={`/Login`} className='small-icon'>{discussion.user.first_name.charAt(0) + discussion.user.last_name.charAt(0)}</Link>
                }
            }
            let comments; 

            if(discussion.comments){
                comments = discussion.comments;
                commentBoard = comments.map(entry => {
                return (
                    <CommentBoard 
                        key={entry.id}
                        id={entry.id}
                        user={user}
                        comment={entry.comment}
                        commentor={entry.commentor}
                    />
                )})
            } else {
                commentAvailable = 'No comments available';
                commentBoard = null;
            }
        } else {
            <div className="spinner-border text-info center container" role="status">
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>
        }
    }

    if (user) {
        if(user.icon){
            icon = <Link to='/UserPage' className='icon discus-page'><img src={user.icon} alt="usericon" className='icon-img'/></Link>;
        } else {
            icon = <Link to='/UserPage' className='icon discus-page'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
        }
        interestStar = user.userPage.interests.find(interest => interest.discussion_id === parseInt(id)) ? true : false;
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
                        <br /><br />
                        <h1 className='discus-title'>
                            {user ? icon : null} 
                            {discussion.topic}
                        {user ?
                            <Link to={`/DiscussionForm`} className="btn bttn discus-bttn discus-page">
                                <br/>Start a discussion<br/>
                            </Link>
                        : null}
                        </h1><br />              
                        <div className="card"><br />
                            <p className="txt">{discussion.discussion}</p>
                            <p>{commentorIcon}<span>{discussion.user.username}</span></p>  
                            &nbsp;  
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn bttn2" onClick={handleInterest}>{ interestStar ? " ★ " : " ☆ " }<span className="badge bg-secondary">{interestCount}</span> Interests</button>
                                &nbsp; &nbsp;
                                <Link to={user ? `/CommentForm/${id}` : `/Login`} className="btn bttn2"><span className="badge bg-secondary">{discussion.comments.length}</span> Comments</Link>
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
                                            <td className="gap-2 d-md-flex justify-content-md-end">
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
                            </div><br /> 
                            {commentBoard}
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