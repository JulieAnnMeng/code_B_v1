import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Signup() {

    return (
        <div className='container'>
        &nbsp; 
        <h1 className='form-title'>Signup</h1>
        &nbsp; &nbsp; &nbsp;
        <div className='container signup-outside'>
            <div className='container signup-inside'>
                <h1 className='form-type-title'>Personal Information: </h1>
                &nbsp;
                <form className='container signup-form right'>
                    <div className="row mb-3">
                        <label for="firstname" className="col-sm-2 col-form-label signup-label signup-label"><span>Firstname</span></label>
                        <div className="col-sm-10 signup-input">
                            <input type="firstname" className="form-control input" id="firstname-signup" />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <label for="lastname" className="col-sm-2 col-form-label signup-label"><span>Lastname</span></label>
                        <div className="col-sm-10 signup-input">
                            <input type="lastname" className="form-control input" id="lastname-signup" />
                        </div>
                    </div>
                    &nbsp; 
                    <div className="row mb-3">
                        <label for="username" className="col-sm-2 col-form-label signup-label"><span>Username</span></label>
                        <div className="col-sm-10 signup-input">
                            <input type="username" className="form-control input" id="username-signup" />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <label for="password" className="col-sm-2 col-form-label signup-label"><span>Password</span></label>
                        <div className="col-sm-10 signup-input">
                            <input type="password" className="form-control input" id="password-signup" />
                        </div>
                    </div>
                    &nbsp;
                    <div className="row mb-3">
                        <label for="password-confirmation" className="col-sm-2 col-form-label signup-label"><span>Password Confirmation</span></label>
                        <div className="col-sm-10 signup-input">
                            <input type="password-confirmation" className="form-control input" id="password-confirmation-signup" />
                        </div>
                    </div>
                    <div className="submit">
                        <button type="submit" className="btn btn-primary center bttn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signup