import React from 'react';
import DiscussionCard from './DiscussionCard';
import { Link, useNavigate, Outlet } from 'react-router-dom'

function Board({addInterest, user, board }) {

    // let commentCount = comments.length;
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
                <DiscussionCard 
                    key={entry.id}
                    id={entry.id}
                    user={user}
                    interests={entry.interests}
                    addInterest={entry.addInterest}
                    interestStar={entry.interestStar}
                    topic={entry.topic}
                    discussion={entry.discussion}
                    icon={icon}
                    username={entry.username}
                    commentCount={entry.commentCount}
                    interestCount={entry.interestCount}
                    entryUserID={entry.entryUserID}
                />
            )
        })    
    

    // <div className="card" id={id}>
    //             <DiscussionCard 
    //                 key={id}
    //                 id={id}
    //                 user={user}
    //                 interests={interests}
    //                 addInterest={addInterest}
    //                 interestStar={interestStar}
    //                 topic={topic}
    //                 discussion={discussion}
    //                 icon={icon}
    //                 username={username}
    //                 commentCount={commentCount}
    //                 interestCount={interestCount}
    //                 entryUserID={entryUserID}
    //             />
    //             &nbsp;
    //         </div>   

        return (

            <div className='container'>
                <div className='intro'>
                    <br /><br /><h1 className='welcome'> {user ? icon : null} Welcome to Code <span>B</span></h1><br /><br />
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

export default Board