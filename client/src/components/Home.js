import React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'

function Home({board, user}) {
    let welcome;
    if (user) {
        welcome = <Link to='/UserPage' className='welcome'> 🙂 {user.first_name}</Link>
    } else {
        welcome = null;
    }
    
    let discussion = board.map(entry => {
        return (
            <Board 
                key={entry.id}
                id={entry.id}
                topic={entry.topic}
                discussion={entry.discussion}
                user={entry.user.username}
                comments={entry.comments}
                interests={entry.interests}
            />
        )
    })
    return (
        <div className='container'>
            <div className='intro'>
                <br /><br /><h1 className='welcome'>Welcome {welcome} to Code <span>B</span></h1><br />
                <p className='info'>
                    A forum for all coding discussions, where users can interact with each other and continue their education in programming.
                </p><br/>
            </div>
            <h2 className='board'>Discussion Board</h2>
            &nbsp;
            {discussion}
            &nbsp; &nbsp;
        </div>
    )
}

export default Home