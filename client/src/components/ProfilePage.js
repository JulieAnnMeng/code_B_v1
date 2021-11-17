import React from 'react'
import { Link } from 'react-router-dom'

function ProfilePage({user}) {

    let icon;
    let iconSmall;

    if(user) {
        if(user.icon){
            icon = <Link to='/UserPage' className='icon'><img src={user.icon} alt="usericon" className='icon-img'/></Link>;
            iconSmall = <img src={user.icon} alt="usericon" className='icon-img-profile'/>;
        } else {
            icon = <Link to='/UserPage' className='icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
            iconSmall = <em className='small-icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</em>;
        }
    }

    return (
        <div><br /><br />
            <h1 className='welcome'> 
                {icon} 
                <em className="welcome-2">Welcome {user.first_name + ' ' + user.last_name}</em> 
                <Link to={`/DiscussionForm`} className="btn bttn discus-bttn">
                    <br />Start a discussion<br />
                </Link>
            </h1><br />
            <div>
                <div className="container">
                    <div className="input-group mb-3 justify-content-between profile-edit-line">
                        <div className="input-group-prepend">
                            <h2 className="board">Profile</h2> 
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link to="/ProfileEdit" className="btn btn2" aria-label="editbutton" aria-describedby="basic-addon1"><span className="edit-btn btn bttn2">EDIT</span></Link>
                        </div>
                    </div>                  
                    <div className="row outside">
                        <div className="col">
                            <h3 className="profile-title">Personal Info</h3><br />
                            <div className="inside" style={{height: 319}}>
                            {/* change to */}
                                <p className="txt"><span>Name: </span>{user.first_name} {user.last_name}</p><br />
                                <p className="txt"><span>Username: </span>{user.username}</p><br /><br />
                                <p className="txt"><span>Icon:  </span>{iconSmall}</p><br />
                                <p className="txt"><span>Password: </span>**********</p>
                            </div>
                        </div>
                        <div className="col">
                            <h3 className="profile-title">Personal Stats</h3><br />
                            <div className="inside" style={{height: 319}}>
                                <p className="txt"><span>Discussions: </span>{user.profilePage.discussion}</p>
                                <p className="txt"><span>Comments: </span>{user.profilePage.comment}</p>
                                <p className="txt"><span>Interests: </span>{user.profilePage.interest}</p>
                            </div>
                        </div>
                    </div><br />
                </div><br />
            </div>
        </div>
    )
}

export default ProfilePage