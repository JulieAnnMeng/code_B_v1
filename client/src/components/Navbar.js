import React from 'react';
// import banner from '../Banner.jpg';

function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-light bg-light" id="Navbar">
                {/* <img src={banner} className="App-banner" alt="banner" /> */}
                <div className="container-fluid">
                    {/* Navbar Home link */}
                    <a className="navbar-brand" id="Navbar-title" href="/">Code <span>B</span></a>
                    <form className="d-flex">
                        <input className="form-control me-2 bttn" id="search" type="search" placeholder="Search code_B" aria-label="Search" />
                        <button className="btn btn-outline-success bttn" type="submit">Search</button>
                    </form>
                    {/* Navbar right links */}
                    <ul className="nav justify-content-end nav-pills" >
                        <li className="bttn">
                            <a className="btn btn-outline-success bttn" href="/Login" id="login-bttn">Login</a>
                        </li>
                        &nbsp; &nbsp; &nbsp;
                        <li className="bttn">
                            <a className="btn btn-outline-success bttn" href="/Signup" id="signup-bttn" >Signup</a>
                        </li>
                    </ul>
                </div>    
            </nav>
        </div>
    )
}
export default Navbar