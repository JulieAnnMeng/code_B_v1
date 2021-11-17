import React, {useState}  from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Navbar({user, board, setSearchReturn, logOut}) {
    const navigate = useNavigate();

    const [search, setSearch] = useState("")
    let searchResults;

    function handleChange(e){
        setSearch(e.target.value)
    }

    function handleSearch(e){
        e.preventDefault();
        searchResults = board.filter( function (term) {
            return term.topic.toLowerCase().includes(search.toLowerCase()) || term.discussion.toLowerCase().includes(search.toLowerCase())
        });
        searchResults[0] ? setSearchReturn(searchResults) : setSearchReturn(null)
        navigate('/');
    }

    return (
        <nav className="navbar" id="Navbar">
            {/* <img src={banner} className="App-banner" alt="banner" /> */}
            <div className="container-fluid">
                {/* Navbar Home link */}
                <a href='/' className="Navbar-title" >Code <span>B</span></a>
                <form className="d-flex" onSubmit={handleSearch}>
                    <input 
                        id="search" 
                        className="form-control me-2 search" 
                        type="search" 
                        placeholder="🔍 Search code_B" 
                        aria-label="Search" 
                        name="search" 
                        value={search}
                        onChange={handleChange}
                    />
                    <button className="bttn" type="submit">Search</button>
                </form>
                {/* Navbar right links */}
                <ul className="nav" >
                    <li>
                        {user ? 
                        <button className="btn bttn" onClick={logOut} >Logout</button>
                        :
                        <a href="/Login" className="btn bttn nav-btn"  id="login-bttn">Login</a>}
                    </li>
                    &nbsp; &nbsp;
                    <li>
                        {user ? 
                        <Link to="/ProfilePage" className="btn bttn nav-btn"  id="profile-bttn" >👤</Link>
                        :
                        <a href="/Signup" className="btn bttn nav-btn"  id="signup-bttn" >Signup</a>}
                    </li>
                </ul>
            </div>    
        </nav>
    )
}
export default Navbar