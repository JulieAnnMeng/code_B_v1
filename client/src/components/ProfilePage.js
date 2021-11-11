import React from 'react'
import { Link } from 'react-router-dom'

function ProfilePage({user}) {

    let welcome;
    if (user) {
        welcome = <Link to='/UserPage' className='welcome'>{user.first_name} 🙂</Link>
    } else {
        welcome = null;
    }  

    return (
        <div className="container card">
            <br /><br /><h1 className='welcome'> Welcome {welcome}</h1><br />
            <div className="container card"><br/>
            <div className="input-group mb-3 justify-content-between">
                <div className="input-group-prepend">
                    <br/><h2 className="board profile-title">Profile</h2><br /> 
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <br/><Link to="/ProfileEdit" className="btn btn-primary bttn2 edit-btn" aria-label="editbutton" aria-describedby="basic-addon1"><span className="edit-btn">EDIT</span></Link><br/>
                </div>
            </div>                  
                <div className="row">
                    <div className="col">
                        <div className="container card">
                            <br /><h3 className="title">Personal Info</h3>
                            <br /><p><span>Name: </span>{user.first_name} {user.last_name}</p>
                            <p><span>Username: </span>{user.username}</p>
                            <p><span>Password: </span>**********</p><br />
                        </div>
                    </div>
                    <div className="col">
                        <div className="container card">
                            <br /><h3 className="title">Personal Stats</h3>
                            <br /><p><span>Discussions: </span>{user.profilePage.discussion}</p>
                            <p><span>Comments: </span>{user.profilePage.comment}</p>
                            <p><span>Interests: </span>{user.profilePage.interest}</p><br />
                        </div>
                    </div>
                </div><br />
            </div><br />
        </div>
    )
}

export default ProfilePage