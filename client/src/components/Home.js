import React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'

function Home({board, addInterest, user}) {

    let discussion;
    let interestStar;
    let interests;

    // if(board){
        discussion = board.map(entry => {
            if (user) {
                interestStar = user.userPage.interests.find(interest => interest.discussion_id === entry.id) ? true : false
                interests = user.userPage.interests
            } else {
                interestStar = null;
                interests = null;
            }
            return (
                <Board 
                    key={entry.id}
                    id={entry.id}
                    topic={entry.topic}
                    discussion={entry.discussion}
                    user={user}
                    interests={interests}
                    interestStar={interestStar}
                    addInterest={addInterest}
                    username={entry.user.username}
                    comments={entry.comments}
                    interestCount={entry.interests.length}
                />
            )
        })    
    // } else {
    //     <div className="spinner-border text-info center container" role="status">
    //         <span className="visually-hidden">Loading...</span>
    //     </div>
    // }
    
    return (
        <div className='container'>
            <div className='intro'>
                <br /><br /><h1 className='welcome'>Welcome {user ? <Link to='/UserPage' className='welcome'> 🙂 {user.first_name}</Link> : null} to Code <span>B</span></h1><br />
                <p className='info'>
                    A forum for all coding discussions, where users can interact with each other and continue their education in programming.
                </p><br/>
            </div>
            <h2 className='board'>Discussion Board</h2><br/>
            &nbsp;
            {discussion}
            &nbsp; &nbsp;
        </div>
    )
}

export default Home