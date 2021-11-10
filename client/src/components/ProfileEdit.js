import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function ProfileEdit({user, userEdit}) {
    const [formData, setFormData] = useState(""); 
    
    let welcome;
    if (user) {
        welcome = <Link to='/UserPage' className='welcome'> 🙂 {user.first_name}</Link>
    } else {
        welcome = null;
    } 

    function handleChange(e){
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        userEdit(user.id, formData);
        setFormData("");
    }

    return (
        <div className='container'><br />
        <br /><br /><h1 className='welcome'> 🙂 Welcome {welcome}</h1><br /><br />
        <h1 className='form-title'>Profile Edits</h1>
        <div className='container card edit-outside'>
            <div className='container edit-inside'>
                <br /><h1 className='form-type-title'>Personal Information: </h1><br />
                &nbsp;
                <form className='container edit-form right' onSubmit={handleSubmit}>
                    <br /><div className="row mb-3">
                        <label className="col-sm-2 col-form-label edit-label edit-label"><span>Firstname</span></label>
                        <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                            <input 
                                id="firstname-edit" 
                                className="form-control input" 
                                type="firstname" 
                                placeholder="First name"
                                name="first_name" 
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label edit-label"><span>Lastname</span></label>
                        <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                            <input 
                                id="lastname-edit"
                                type="lastname" 
                                className="form-control input" 
                                placeholder="Last name"
                                name="last_name" 
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp; 
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label edit-label"><span>Username</span></label>
                        <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                            <input 
                                id="username-edit"
                                type="username" 
                                className="form-control input" 
                                placeholder="username"
                                name="username" 
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label edit-label"><span>Current Password</span></label>
                        <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                            <input 
                                id="current-password-edit" 
                                type="password" 
                                className="form-control input" 
                                placeholder="Current Password" 
                                name="password" 
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label edit-label"><span>New Password</span></label>
                        <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                            <input 
                                id="new-password-edit" 
                                type="password" 
                                className="form-control input" 
                                placeholder="New Password"
                                name="new_password" 
                                value={formData.new_password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label edit-label"><span>New Password Confirmation</span></label>
                        <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                            <input 
                                id="new-password-confirmation-edit" 
                                type="password" 
                                className="form-control input" 
                                placeholder="New Password confirmation" 
                                name="new_password_confirmation" 
                                value={formData.new_password_confirmation}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="submit edit-bttn">
                        <button type="submit" className="btn btn-primary center bttn">Update</button><br />
                    </div>
                </form><br />
            </div><br />
        </div><br />
    </div>
    )
}

export default ProfileEdit