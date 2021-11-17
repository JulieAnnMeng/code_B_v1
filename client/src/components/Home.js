import React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'

function Home({board, addInterest, user}) {
    
    let discussion;
    let interestStar;
    let interests;
    let icon;

    if(user) {
        if(user.icon){
            icon = <Link to='/UserPage' className='icon'><img src={user.icon} alt="usericon" className='icon-img'/></Link>;
        } else {
            icon = <Link to='/UserPage' className='icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
        }
    }

    if(board){
        discussion = board.map(entry => {
            let commentorIcon;
            let entryUserID = entry.user.id;

            if (user) {
                interestStar = user.userPage.interests.find(interest => interest.discussion_id === entry.id) ? true : false;
                interests = user.userPage.interests;
                
                if(entry.user.icon){
                    commentorIcon = <Link to={`/ViewUser/${entryUserID}`}><img src={entry.user.icon} alt="usericon" className='icon-img-small'/></Link>;
                } else {
                    commentorIcon = <Link to={`/ViewUser/${entryUserID}`} className='small-icon'>{entry.user.first_name.charAt(0) + entry.user.last_name.charAt(0)}</Link>;
                }
            } else {
                interestStar = null;
                interests = null;
                if(entry.user.icon){
                    commentorIcon = <Link to={`/Login`}><img src={entry.user.icon} alt="usericon" className='icon-img-small'/></Link>;
                } else {
                    commentorIcon = <Link to={`/Login`} className='small-icon'>{entry.user.first_name.charAt(0) + entry.user.last_name.charAt(0)}</Link>;
                }
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
    }    
    
    return (
        <div>
            <div className='intro'>
                <br /><br /><h1 className='welcome'> {user ? icon : null} <em className="welcome-2">Welcome to Code <span>B</span></em>{user ?
                    <Link to={`/DiscussionForm`} className="btn btn-primary bttn discus-bttn"><br/>Start a discussion<br/></Link>
                : null}</h1>
                <br />
                <p className='info txt'>
                    A forum for all coding discussions, where users can interact with each other and continue their education in programming.
                </p>
            </div>
            <div className='container'>
                <h2 className='board'>Discussion Board</h2>
                {discussion}
                <br />
            </div>
        </div>
    )
}

export default Home