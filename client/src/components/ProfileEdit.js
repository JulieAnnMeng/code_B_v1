import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function ProfileEdit({user, userEdit}) {
    const blankFormData = {first_name: '', last_name: '', username: '', password: '', new_password: '', new_password_confirmation: ''};
    const [formData, setFormData] = useState(blankFormData); 
    const [toggle, setToggle] = useState(false);
    const [match, setMatch] = useState(true);

    let welcome;
    if (user) {
        welcome = <Link to='/UserPage' className='welcome'> 🙂 {user.first_name}</Link>
    } else {
        welcome = null;
    } 

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function passwordMatch(){
        if (formData.new_password !== formData.new_password_confirmation) {
            setMatch(false)
        } else { setMatch(true) }
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        if(formData.password === null){
            console.log("Current password is required");
        } else if(toggle && formData.new_password === null && formData.new_password_confirmation === null ){
            console.log("Please confirm your passwords");
        } else if (formData.new_password !== formData.new_password_confirmation) {
            console.log("Passwords must match");
            passwordMatch();
        } 
        else {
            passwordMatch()     
            debugger;      
            userEdit(user.id, formData);
            setFormData("");
        }   
    }

    function handleToggle(e) {
        e.preventDefault();
        setToggle(!toggle);
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
                                pattern="/^[A-Za-z]+$/" 
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
                                pattern="/^[A-Za-z]+$/" 
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
                                // pattern="/^[A-Za-z]+$/" 
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <h2 className="title">To confirm your changes, please enter your password</h2><br /><br /><br />
                        <label className="col-sm-2 col-form-label edit-label"><span>Current Password</span></label>
                        <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                            <input 
                                id="current-password-edit" 
                                type="password" 
                                className="form-control input" 
                                placeholder="Current Password" 
                                name="password" 
                                // pattern="/^\s*$/" 
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    &nbsp;
                    <div className="submit d-grid gap-2 d-md-block">
                        <button type="submit" className="btn btn-primary bttn">Update</button>
                        &nbsp; &nbsp;
                        <button className="btn btn-primary password-bttn bttn" onClick={handleToggle}> {toggle ? "Nevermind" : "Change Password"} </button>                    
                    </div>
                    {/* Password Change Section */}
                    <div className={toggle ? undefined : 'hidden'}><br />
                        <div className="edit-password conatainer card"><br />
                            <div className="edit-password row mb-3">
                                <label className="col-sm-2 col-form-label edit-label"><span>New Password</span></label>
                                <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                                    <input 
                                        id="new-password-edit" 
                                        type="password" 
                                        className="form-control input" 
                                        placeholder="New Password"
                                        name="new_password" 
                                        // pattern="/^\s*$/" 
                                        value={formData.new_password}
                                        onChange={handleChange}
                                        required={toggle}
                                        style={{backgroundColor: match ? 'none' : 'red'}}
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="edit-password row mb-3">
                                <label className="col-sm-2 col-form-label edit-label"><span>New Password Confirmation</span></label>
                                <div className="col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end" style={{width: '55%'}}>
                                    <input 
                                        id="new-password-confirmation-edit" 
                                        type="password" 
                                        className="form-control input" 
                                        placeholder="New Password confirmation" 
                                        name="new_password_confirmation" 
                                        // pattern="/^\s*$/" 
                                        value={formData.new_password_confirmation}
                                        onChange={handleChange}
                                        required={toggle}
                                        style={{backgroundColor: match ? 'none' : 'red'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>    
                </form><br />
            </div><br />
        </div><br />
    </div>
    )
}

export default ProfileEdit