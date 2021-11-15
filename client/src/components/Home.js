import React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'

function Home({board, addInterest, user, logOut}) {

    let discussion;
    let interestStar;
    let interests;
    let icon;

    if(user) {
        if(user.icon){
            icon = user.icon;
        } else {
            icon = <Link to='/UserPage' className='icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
        }
    }

    // if(board){
        discussion = board.map(entry => {
            let commentorIcon;

            if (user) {
                interestStar = user.userPage.interests.find(interest => interest.discussion_id === entry.id) ? true : false;
                interests = user.userPage.interests;
                
            } else {
                interestStar = null;
                interests = null;
            }

            if(entry.user.icon){
                commentorIcon = entry.user.icon;
            } else {
                commentorIcon = entry.user.first_name.charAt(0) + entry.user.last_name.charAt(0);
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
                    icon={commentorIcon}
                    username={entry.user.username}
                    comments={entry.comments}
                    interestCount={entry.interests.length}
                    entryUserID={entry.user.id}
                />
            )
        })    
    
    return (
        <div className='container'>
            
            <div className='intro'>

                <br /><br /><h1 className='welcome'> {user ? icon : null} Welcome to Code <span>B</span></h1>

                <div>
                    <ul>
                        <li>
                            { user ? <button onClick={logOut} >Logout</button> : <Link to={"/Login"}>Login</Link> }
                        </li>
                        <li>
                            { user ? <Link to={"/ProfilePage"} ><button>👤</button></Link> : <Link to={"/Signup"} ><button>Signup</button></Link> }
                        </li>
                    </ul>
                </div>

                {user ?
                    <Link to={`/DiscussionForm`} className="btn btn-primary btn-outline-success bttn discus-bttn"><br/>Start a discussion<br/></Link>
                : null}<br />   
                <br /><p className='info'>
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