import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Login({logIn}) {

    return (
        <div className='container'>
            &nbsp; 
            <h1 className='form-title'>Login</h1>
            &nbsp; &nbsp; &nbsp;
            <div className='container login-outside'>
                <div className='container login-inside'>
                    <form className='container login-form'>
                        <div className='fields'>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label for="username" className="col-form-label login-label"><span>Username</span></label>
                                </div>
                                <div class="col-auto">
                                    <input type="username" id="username-login" className="form-control input" size="50" aria-describedby="usernameHelpInline" />
                                </div>
                            </div>
                            &nbsp; &nbsp;
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label for="password" className="col-form-label login-label"><span> Password  </span></label>
                                </div>
                                <div class="col-auto ">
                                    <input type="password" id="password-login" className="form-control input" size="50" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                        </div>
                        <div class="submit">
                            <button type="submit" className="btn btn-primary center bttn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login