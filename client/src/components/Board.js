import React from 'react';
import DiscussionCard from './DiscussionCard';

function Board({id, logOn, topic, discussion, user, comments, interests}) {
    let commentCount = comments.length;
    let interestCount = interests.length;
  
        return (
            <div className="card" id={id}>
                <DiscussionCard 
                    key={id}
                    id={id}
                    logOn={logOn}
                    topic={topic}
                    discussion={discussion}
                    user={user}
                    commentCount={commentCount}
                    interestCount={interestCount}
                />
                &nbsp;
            </div>       
    )
}

export default Board