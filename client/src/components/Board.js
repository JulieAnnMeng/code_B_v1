import React, {useState} from 'react';
import DiscussionCard from './DiscussionCard';

function Board({id, logOn, addInterest, topic, discussion, user, comments, interests}) {
    const [interestCount, setInterestCount] = useState(interests.length)
    let commentCount = comments.length;
  
        return (
            <div className="card" id={id}>
                <DiscussionCard 
                    key={id}
                    id={id}
                    logOn={logOn}
                    addInterest={addInterest}
                    topic={topic}
                    discussion={discussion}
                    user={user}
                    commentCount={commentCount}
                    interestCount={interestCount}
                    setInterestCount={setInterestCount}
                />
                &nbsp;
            </div>       
    )
}

export default Board