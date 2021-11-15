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

    function handleSignup(e){
        e.preventDefault();
        navigate('/Signup');
    }

    return (
        <div>
            <div className="navbar navbar-light bg-light" id="Navbar">
                {/* <img src={banner} className="App-banner" alt="banner" /> */}
                <div className="container-fluid">
                    {/* Navbar Home link */}
                    <a href='/' className="navbar-brand" id="Navbar-title" >Code <span>B</span></a>
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
                        <button className="btn btn-outline-success bttn" type="submit">Search</button>
                    </form>
                    {/* Navbar right links */}
                    <ul>
                        <li>
                            {user ? 
                            <button onClick={logOut} >Logout</button>
                            :
                            <a href="/Login" >Login</a>}
                        </li>
                        &nbsp; &nbsp;
                        <li>
                            {user ? 
                            <Link to={"/ProfilePage"} >👤</Link>
                            :
                            <Link to={"/Signup"} ><button onClick={handleSignup}>Signup</button></Link>}
                        </li>
                    </ul>
                </div>    
            </div>
        </div>
    )
}
export default Navbar