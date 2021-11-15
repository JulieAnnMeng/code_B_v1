import React, {useState}  from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom'
import Board from './Board'
// import Navbar from './Navbar'

function Home({board, addInterest, user, setSearchReturn, logOut}) {

    let discussion;
    let interestStar;
    let interests;
    let icon;
    const [search, setSearch] = useState("")
    let searchResults;

    const navigate = useNavigate();    

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

    if(user) {
        if(user.icon){
            icon = user.icon;
        } else {
            icon = <Link to='/UserPage' className='icon'>{user.first_name.charAt(0) + user.last_name.charAt(0)}</Link>;
        }
    }

    // if(board){
        discussion = board.map(entry => {
            let commentorIcon;

            if (user) {
                interestStar = user.userPage.interests.find(interest => interest.discussion_id === entry.id) ? true : false;
                interests = user.userPage.interests;
                
            } else {
                interestStar = null;
                interests = null;
            }

            if(entry.user.icon){
                commentorIcon = entry.user.icon;
            } else {
                commentorIcon = entry.user.first_name.charAt(0) + entry.user.last_name.charAt(0);
            }

            return (
                <Board 
                    key={entry.id}
                    id={entry.id}
                    topic={entry.topic}
                    discussion={entry.discussion}
                    user={user}
                    interests={interests}
                    interestStar={interestStar}
                    addInterest={addInterest}
                    icon={commentorIcon}
                    username={entry.user.username}
                    comments={entry.comments}
                    interestCount={entry.interests.length}
                    entryUserID={entry.user.id}
                />
            )
        })    
    
    return (
        <div>
            {/* <Navbar user={user} board={board} setSearchReturn={setSearchReturn} logOut={logOut} /> */}
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
                            <Link to={`Login`} className="btn bttn">Login</Link>}
                            <Outlet />
                        </li>
                        &nbsp; &nbsp;
                        <li>
                            {user ? 
                            <Link to={`ProfilePage`} className="btn bttn">👤</Link>
                            :
                            // unable to get signup or login buttons to work on Heroku
                            <button to={`Signup`} className="btn btn-primary bttn" onClick={() => navigate(`Signup`)}>Signup</button> }
                            <Outlet />
                        </li>
                    </ul>
                </div>  
            </nav>  

            <Outlet />
            {/* <div className='container'>
                

                <div className='intro'>

                    <br /><br /><h1 className='welcome'> {user ? icon : null} Welcome to Code <span>B</span></h1><br /><br />
                    {user ?
                        <Link to={`/DiscussionForm`} className="btn btn-primary btn-outline-success bttn discus-bttn"><br/>Start a discussion<br/></Link>
                    : null}<br />   
                    <br /><p className='info'>
                        A forum for all coding discussions, where users can interact with each other and continue their education in programming.
                    </p><br/>
                </div>
                <h2 className='board'>Discussion Board</h2>
                &nbsp;
                {discussion}
                &nbsp; &nbsp;
            </div> */}
        </div>

    )
}

export default Home