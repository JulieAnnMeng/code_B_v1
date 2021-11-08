import React, { useState } from 'react'


function DiscussionForm({user, startDiscussion}) {
    const blankFormData = {user_id: user.id, topic: "", discussion: ""}
    const [formData, setFormData] = useState(blankFormData);   

    function handleSubmit (e) {
        e.preventDefault();
        startDiscussion(formData);
        setFormData(blankFormData)
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="container"><br />
            <h1 className='board'>Submit a Discussion Topic</h1>
            {user ?
            <>    
                <div className="card container"><br />
                         <form className='container comment-form right' onSubmit={handleSubmit}>
                            <div className='fields'>
                                <div className="row mb-3">
                                    <div className="col-auto">
                                        <label className="col-form-label discussion-label"><span>Topic</span></label>
                                    </div>
                                    <div className="col-sm-10 discussion-input">
                                        <input 
                                            id="topic-discussion" 
                                            className="form-control input" 
                                            type="topic" 
                                            placeholder="discussion topic"
                                            name="topic" 
                                            value={formData.topic}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">   
                                    <div className="col-auto">
                                        <label className="col-form-label discussion-label"><span>Discussion</span></label>
                                    </div>
                                    <div className="col-auto">
                                        <textarea 
                                            id="discussion-entry" 
                                            className="form-control input"
                                            aria-describedby="discussionentryHelpInline" 
                                            placeholder="Discussion"
                                            name="discussion" 
                                            value={formData.discussion}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary bttn">Submit</button>
                        </form><br />
                </div>
            </>
            :
            <div className="spinner-border text-info center container" role="status">
                <span className="visually-hidden">
                    Loading...
                </span>
            </div> }
            
        </div>
    )
}

export default DiscussionForm