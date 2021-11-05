import React from 'react';
// import { Link } from 'react-router-dom'
import DiscussionBoard from './DiscussionBoard';
import CommentBoard from './CommentBoard'


function Board({id, topic, discussion, user, comments, interests}) {
    let commentCount = comments.length;
    let interestCount = interests.length;
    // debugger;
    console.log(discussion)
    console.log(comments)

    let commentBoard = comments.map(entry => {
        return (
            <CommentBoard 
                key={entry.id}
                comment={entry.comment}
                commentor={entry.commentor}
            />
        )
    })
    
    function handleDiscussionClick(e) {
        return (
            <DiscussionBoard 
                key={id}
                topic={topic}
                discussion={discussion}
                user={user}
                coments={comments}
                interests={interests}
            />
        )
    }
    
        return (
            <div className="card" id={id}>
                <h4 className="title" onClick={handleDiscussionClick}>{topic}</h4>
                <p>{discussion}</p>
                <p>🙂 {user}</p>
                <div class="d-grid gap-2 d-md-block">
                    <button type="button" class="btn btn-primary bttn2">☆ <span class="badge bg-secondary">{interestCount}</span> Interests</button>
                    &nbsp; &nbsp;
                    <button class="btn btn-primary bttn2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span class="badge bg-secondary">{commentCount}</span> Comments
                    </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            {commentBoard}                           
                        </div>
                    </div>

                </div>
                &nbsp; &nbsp;

            </div>       
    )
}

export default Board