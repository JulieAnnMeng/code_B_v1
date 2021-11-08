import React from 'react'
// import { Link } from 'react-router-dom'


function ProfilePage({user}) {
    console.log(user)

    return (
        <h1>{user.firstname} Profile</h1>
    )
}

export default ProfilePage