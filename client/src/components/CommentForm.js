import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


function CommentForm({user, addComment}) {
    const blankFormData = {user_id: user.id, discussion_id: "", comment: ""}
    const [formData, setFormData] = useState(blankFormData);   
    const [discussion, setDiscussion] = useState(null) 
    const { id } = useParams();

    useEffect(() => {
        getDiscussion()
    }, []);

    function getDiscussion() {
        fetch(`/discussions/${id}`)
        .then((response) => response.json())
        .then((data) => {
            // debugger;
            setDiscussion(data)
            setFormData({ ...formData, discussion_id: data.id });
            window.scrollTo(0, 0)
        })
        .catch((error) => console.log(error))
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(formData)
        addComment(formData);
        setFormData(blankFormData)
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