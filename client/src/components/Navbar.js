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
            <div >
                {/* <img src={banner} className="App-banner" alt="banner" /> */}
                <div>
                    {/* Navbar Home link */}
                    <a href='/' >Code <span>B</span></a>
                    <form onSubmit={handleSearch}>
                        <input 
                            id="search" 
                            type="search" 
                            placeholder="🔍 Search code_B" 
                            aria-label="Search" 
                            name="search" 
                            value={search}
                            onChange={handleChange}
                        />
                        <button type="submit">Search</button>
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
                            <Link to={"/Signup"}><button onClick={handleSignup}>Signup</button></Link>}
                        </li>
                    </ul>
                </div>    
            </div>
        </div>
    )
}
export default Navbar