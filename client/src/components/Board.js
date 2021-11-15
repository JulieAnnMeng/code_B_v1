import React from 'react';
import DiscussionCard from './DiscussionCard';

function Board({id, username, addInterest, topic, discussion, icon, user, comments, interests, interestCount, interestStar, entryUserID}) {

    let commentCount = comments.length;

        return (
            <div className="card" id={id}>
                <DiscussionCard 
                    key={id}
                    id={id}
                    user={user}
                    interests={interests}
                    addInterest={addInterest}
                    interestStar={interestStar}
                    topic={topic}
                    discussion={discussion}
                    icon={icon}
                    username={username}
                    commentCount={commentCount}
                    interestCount={interestCount}
                    entryUserID={entryUserID}
                />
                &nbsp;
            </div>       
    )
}

export default Board