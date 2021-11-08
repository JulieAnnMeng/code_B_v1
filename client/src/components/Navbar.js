import React from 'react';
// import banner from '../Banner.jpg';

function Navbar({user, logOut}) {
    console.log(user)

    return (
        <div>
            <nav className="navbar navbar-light bg-light" id="Navbar">
                {/* <img src={banner} className="App-banner" alt="banner" /> */}
                <div className="container-fluid">
                    {/* Navbar Home link */}
                    <a className="navbar-brand" id="Navbar-title" href="/">Code <span>B</span></a>
                    <form className="d-flex">
                        <input className="form-control me-2 bttn" id="search" type="search" placeholder="🔍 Search code_B" aria-label="Search" />
                        <button className="btn btn-outline-success bttn" type="submit">Search</button>
                    </form>
                    {/* Navbar right links */}
                    <ul className="nav justify-content-end nav-pills" >
                        <li className="bttn">
                            {user ? 
                            <button className="btn btn-outline-success bttn" onClick={logOut} >Logout</button>
                            :
                            <a className="btn btn-outline-success bttn" href="/Login" id="navBar-bttn">Login</a>}
                        </li>
                        &nbsp; &nbsp;
                        <li className="bttn">
                            {user ? 
                            <a className="btn btn-outline-success bttn" href="/ProfilePage" id="navBar-bttn" >👤</a>
                            :
                            <a className="btn btn-outline-success bttn" href="/Signup" id="navBar-bttn" >Signup</a>}
                        </li>
                    </ul>
                </div>    
            </nav>
        </div>
    )
}
export default Navbar