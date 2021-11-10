import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import CommentBoard from './CommentBoard'


function Discussion({user, addInterest}) {
    const [discussion, setDiscussion] = useState(null)
    const [interestCount, setInterestCount] = useState(null)
    const [update, setUpdate] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();

    let welcome;
    let commentAvailable;
    let commentAlert = "Login or signup to participate";
    let tableHeader;
    let commentBoard;

    useEffect(() => {
        getDiscussion()
        setUpdate(false)
    }, [update]);

    function getDiscussion() {
        fetch(`/discussions/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setDiscussion(data)
            setInterestCount(data.interests.length)
            window.scrollTo(0, 0)        
        })
        .catch((error) => console.log(error))
    }

    if (user) {
        welcome = <Link to='/UserPage' className='welcome'> 🙂 {user.first_name}</Link>
    } else {
        welcome = null;
    }
    
    if(discussion){
        let comments; 
        if(discussion.comments){
            comments = discussion.comments;
            commentBoard = comments.map(entry => {
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
            commentBoard = null;
        }
    }
    
    if (commentBoard) {
        commentAvailable = `${discussion.comments.length} comments below. Join the discussion!`;
    } else {
        commentAvailable = 'No comments available';
    }
    
    if(user) {
        tableHeader = commentAvailable
    } else {
        tableHeader = commentAlert
    };

    function handleInterest(e) {
        e.preventDefault();
        if(user) {
            setUpdate(true)
            let user_id = user.id;
        let discussion_id = id;
            setInterestCount(interestCount + 1)
            addInterest(user_id, discussion_id);
        } else {
            navigate('/Login')
        }
    }

        return (
             <div className="container">
                {discussion ?  
                    <>
                        &nbsp;
                        <br /><br /><h1 className='welcome'>Welcome {welcome} to Code <span>B</span></h1><br />
                        <br /><br /><h4 className='board'>{discussion.topic}</h4>
                        &nbsp;               
                        <div className="card container">
                            <p>{discussion.discussion}</p>
                            <p>🙂 {discussion.user.username}</p>  
                            &nbsp;  
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary bttn2" onClick={handleInterest}>☆ <span className="badge bg-secondary">{interestCount}</span> Interests</button>
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