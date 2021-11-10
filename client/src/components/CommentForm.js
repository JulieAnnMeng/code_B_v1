import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function CommentForm({user, addComment, editUserComment, board}) {
    const { discussion_id, id } = useParams();

    let commentFormData;

    discussion_id ? commentFormData = (board.find(dis => dis.id === parseInt(discussion_id)).comments.find(comment => comment.id === parseInt(id))) 
        : commentFormData = {user_id: user.id, discussion_id: id, comment: ""}

    const [formData, setFormData] = useState(commentFormData);   
    const discussion = {topic: board.find(dis => dis.id === parseInt(id)).topic, discussion: board.find(dis => dis.id === parseInt(id)).discussion}
    
    function handleSubmit (e) {
        e.preventDefault();
        if(discussion_id){
            editUserComment(formData);
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
        <div className="container"><br />
            <h1 className='board'>Submit a Comment</h1>
            {discussion ? 
            <>    
                <div className="card container">
                    <h2 className="title">{discussion.topic}</h2>
                    <p>{discussion.discussion}</p><br />
                    <div className="card container"><br />
                        <form className='container comment-form' onSubmit={handleSubmit}>
                            <div className='fields'>
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label className="col-form-label login-label"><span>Comment</span></label>
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
                            </div>
                            <button type="submit" className="btn btn-primary bttn">Submit</button>
                        </form><br />
                    </div>    
                </div>
            </>
            :
            <div className="spinner-border text-info center container" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> }
        </div>
    )
}

export default CommentForm