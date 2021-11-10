import React, {useState}  from 'react';

function Navbar({user, board, setSearchReturn, logOut}) {
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
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light" id="Navbar">
                {/* <img src={banner} className="App-banner" alt="banner" /> */}
                <div className="container-fluid">
                    {/* Navbar Home link */}
                    <a className="navbar-brand" id="Navbar-title" href="/">Code <span>B</span></a>
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