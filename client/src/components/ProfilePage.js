import React from 'react'
// import { Link } from 'react-router-dom'


function ProfilePage({user}) {
    console.log(user)


    return (
        <div className="container card">
            <br/><h1 className="board">🙂 Welcome {user.first_name}</h1><br/>
            <div className="container card">
                <br/><h2 className="board">Profile</h2>
                <div className="container card">
                    <h3 className="title">Personal Info</h3>
                    <p><span>Name: </span>{user.first_name} {user.last_name}</p>
                    <p><span>Username: </span>{user.username}</p>
                    <p><span>Password: </span>**********</p>
                </div>
                <div className="container card">
                    <h3 className="title">Personal Stats</h3>
                    <p><span>Discussions: </span>{user.profilePage.discussion}</p>
                    <p><span>Comments: </span>{user.profilePage.comment}</p>
                    <p><span>Interests: </span>{user.profilePage.interest}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage