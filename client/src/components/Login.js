import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Login({logIn, errors}) {

    const blankFormData = {username: "", password: ""}
    const [formData, setFormData] = useState(blankFormData);    

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        logIn(formData);
        setFormData(blankFormData)
    }

    return (
        <div className='container'>
            <br /><h1 className='form-title'>Login</h1><br /><br />
            <div className='container outside'><br />
                <div className='container inside'>
                    &nbsp;
                    <form className='container form' onSubmit={handleSubmit}>
                        <div className='fields'>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label className="col-form-label label"><span>Username</span></label>
                                </div>
                                <div className="col-auto">
                                    <input 
                                        id="username-login" 
                                        className="form-control input"
                                        size="50" 
                                        aria-describedby="usernameHelpInline" 
                                        placeholder="Username"
                                        name="username" 
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            &nbsp; &nbsp;
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label className="col-form-label label"><span> Password  </span></label>
                                </div>
                                <div className="col-auto ">
                                    <input 
                                        id="password-login"
                                        className="form-control input"
                                        size="50"
                                        aria-describedby="passwordHelpInline"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        value={formData.password}    
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div className="submit d-grid gap-2 d-md-block">
                            <button type="submit" className="btn btn-primary bttn bttn2">Login</button>
                            &nbsp; &nbsp;
                            <Link to="/signup" className="btn btn-primary bttn bttn2"><p className="signup-link">Signup</p></Link>
                        </div>
                    </form>
                    {/* ask Chaim or Billy on how to do pop up error messages. Setup validations for all forms */}
                    {/* {errors ? (
                        <Message error header={errors} content="Please sign in again" />
                    ) : null} */}
                </div>
            </div>
        </div>
    )
}

export default Login