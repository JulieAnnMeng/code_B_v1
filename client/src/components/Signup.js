import React, {useState} from 'react'
// import { Link } from 'react-router-dom'


function Signup({signUp}) {
    const blankFormData = {first_name: "", last_name: "", username: "", password: "", password_confirmation: ""}
    const [formData, setFormData] = useState(blankFormData);    

    function handleChange(e){
        console.log(formData)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        signUp(formData);
        setFormData(blankFormData)
    }

    return (
        <div className='container'><br />
        <h1 className='form-title'>Signup</h1><br />
        &nbsp;
        <div className='container outside'>
            <div className='container inside'>
                <h1 className='form-type-title'>Personal Information: </h1>
                &nbsp;
                <form className='container form right' onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label label"><span>Firstname</span></label>
                        <div className="col-sm-10 signup-input">
                            <input 
                                id="firstname-signup" 
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
                        <label className="col-sm-2 col-form-label label"><span>Lastname</span></label>
                        <div className="col-sm-10 signup-input">
                            <input 
                                id="lastname-signup"
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
                        <label className="col-sm-2 col-form-label label"><span>Username</span></label>
                        <div className="col-sm-10 signup-input">
                            <input 
                                id="username-signup"
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
                        <label className="col-sm-2 col-form-label label"><span>Password</span></label>
                        <div className="col-sm-10 signup-input">
                            <input 
                                id="password-signup" 
                                type="password" 
                                className="form-control input" 
                                placeholder="password"
                                name="password" 
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label label"><span>Password Confirmation</span></label>
                        <div className="col-sm-10 signup-input">
                            <input 
                                id="password-confirmation-signup" 
                                type="password" 
                                className="form-control input" 
                                placeholder="Password confirmation" 
                                name="password_confirmation" 
                                value={formData.password_confirmation}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="signup-btn">
                        <button type="submit" className="center bttn bttn2">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signup