import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';


function CommentForm({user, addComment, editUserComment, board}) {

    const { discussion_id, id } = useParams();

    let commentFormData;
    let discussion;
    let icon;
    let link_id;

    if(user) {
        if(user.icon){
            icon = <Link to='/UserPage' className='icon'><img src={user.icon} alt="usericon" className='icon-img'/></Link>;
        } else {
            icon = <Link to='/UserPage' className='icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
        }
    }

    if(board) {
        if(discussion_id) {
            link_id = discussion_id;
            commentFormData = (board.find(dis => dis.id === parseInt(discussion_id)).comments.find(comment => comment.id === parseInt(id)));
            discussion = {topic: board.find(dis => dis.id === parseInt(discussion_id)).topic, discussion: board.find(dis => dis.id === parseInt(discussion_id)).discussion} 
        } else {
            link_id = id;
            commentFormData = {user_id: user.id, discussion_id: id, comment: ""};
            discussion = {topic: board.find(dis => dis.id === parseInt(id)).topic, discussion: board.find(dis => dis.id === parseInt(id)).discussion}
        }
    }

    const [formData, setFormData] = useState(commentFormData);   
    
    
    function handleSubmit (e) {
        e.preventDefault();
        if(discussion_id){
            editUserComment(formData, discussion_id);
            setFormData({user_id: user.id, discussion_id: id, comment: ""});
        } else {
            addComment(formData);
            setFormData({user_id: user.id, discussion_id: id, comment: ""});
        }
    }

    function handleChange(e) {
        setFormData({ ...formData, comment: e.target.value });
    }

    return (
        <div>
            <h1 className="welcome"><br />
                {user ? icon : null} 
                <em className="welcome-2">Submit a Comment</em>
                {user ?
                <Link to={`/DiscussionForm`} className="btn btn-primary discus-bttn bttn me-2"><br/>Start a discussion<br/></Link>
                :
                null}
            </h1> 
            <div className="container"><br />
                {discussion ? 
                <>    
                    <div className="container outside">
                        <h2 className="title"><Link to={`/Discussion/${link_id}`} className="title">{discussion.topic}</Link></h2>
                        <p>{discussion.discussion}</p><br />
                        <div className=""><br />
                            <form className='container comment-form inside' onSubmit={handleSubmit}>
                                <div className='fields'>
                                    <div className="row g-3 align-items-center">
                                        <div className="col-auto">
                                            <label className="col-form-label label"><span>Comment</span></label>
                                        </div>
                                        <div className="col-auto">
                                            <textarea 
                                                id="comment-entry" 
                                                className="form-control input"
                                                aria-describedby="commententryHelpInline" 
                                                placeholder="Discussion comment"
                                                name="comment" 
                                                value={formData.comment}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div><br />
                                <div className="submit">
                                    <button type="submit" className="btn btn-primary bttn bttn2">Submit</button>
                                </div>
                            </form><br />
                        </div>    
                    </div>
                </>
                :
                <div className="spinner-border text-info center container" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> }
            </div>
        </div>
    )
}

export default CommentForm