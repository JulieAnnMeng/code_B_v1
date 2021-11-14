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
        setSearchReturn(searchResults);
        navigate('/');
    }

    return (
        <div>
            <nav className="navbar" id="Navbar">
                {/* <img src={banner} className="App-banner" alt="banner" /> */}
                <div className="container-fluid">
                    {/* Navbar Home link */}
                    <a href='/' id="Navbar-title" >Code <span>B</span></a>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input 
                            id="search" 
                            className="form-control me-2 bttn" 
                            type="search" 
                            placeholder="🔍 Search code_B" 
                            aria-label="Search" 
                            name="search" 
                            value={search}
                            onChange={handleChange}
                        />
                        <button className="btn bttn" type="submit">Search</button>
                    </form>
                    {/* Navbar right links */}
                    <ul className="nav" >
                        <li>
                            {user ? 
                            <button className="btn btn-outline-success bttn" onClick={logOut} >Logout</button>
                            :
                            <Link to={`/Login`} className="btn bttn">Login</Link>}
                        </li>
                        &nbsp; &nbsp;
                        <li>
                            {user ? 
                            <Link to={`/ProfilePage`} className="btn bttn">👤</Link>
                            :
                            <Link to={`/Signup`} className="btn btn-primary bttn">Signup</Link> }
                        </li>
                    </ul>
                </div>    
            </nav>
        </div>
    )
}
export default Navbar