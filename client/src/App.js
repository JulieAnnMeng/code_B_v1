import './App.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import React, { useState, useEffect, Outlet } from "react";
import Home from "./components/Home";
// import Navbar from './components/Navbar';
import Login from "./components/Login";
import Signup from "./components/Signup";
import DiscussionCard from "./components/DiscussionCard";
import Discussion from "./components/Discussion";
import CommentForm from "./components/CommentForm";
import DiscussionForm from './components/DiscussionForm';
import UserPage from "./components/UserPage";
import ProfilePage from "./components/ProfilePage";
import ProfileEdit from './components/ProfileEdit';
import ViewUser from './components/ViewUser';
// import Footer from "./components/Footer";

function App() {
  const [board, setBoard] = useState(null);
  const [user, setUser] = useState(null);
  const [searchReturn, setSearchReturn] = useState(null);
  const [loggedOn, setLoggedOn] = useState(false);
  const [errors, setErrors] = useState(null);
  const [search, setSearch] = useState("")
  let searchResults;

  const navigate = useNavigate();

  useEffect(() => {
    getDiscussions()
    getUser()
  }, [loggedOn]);
  
  function getDiscussions() {
    fetch("/api/discussions")
    .then((response) => response.json())
    .then((data) => setBoard(data))
    .catch((error) => setErrors(error))
  }

  function getUser() {
    fetch("/api/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
        })
      } else {
        r.json().then(setUser(null))
      }})
    .catch((error) => setErrors(error))
  }

  function logIn (data) {
    fetch('/api/login',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
          setLoggedOn(true)
          navigate('/UserPage');
        });
      } 
      else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function logOut() {
		fetch("/api/logout", {
			method: "DELETE",
		}).then(() => {
      navigate("/");
			setUser(null);
      setLoggedOn(false)
		});
	}

  function signUp (data) {
    fetch('/api/signup',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
          setLoggedOn(true)
          navigate('/UserPage');
        });
      } 
      else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function addComment(data) {
    fetch('/api/comments',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    })
    .then((r) => {
      if (r.ok) {
        r.json();
        }
      else {
        r.json().then((err) => setErrors(err.errors));
      }
      getDiscussions()
      navigate(`/Discussion/${data.discussion_id}`);
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function startDiscussion(data) {
    fetch('/api/discussions',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    })
    .then((r) => r.json())
    .then(discussion => navigate (`/Discussion/${discussion.id}`))
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function userEdit(id, data){
    let updates = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== ''))
    fetch(`/api/userEdit/${id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(updates)
    })
    .then((r) => {
      if (r.ok) {
        r.json();
        }
      else {
        r.json().then((err) => setErrors(err.errors));
      }
      getUser();
      navigate(`/ProfilePage`);
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function addInterest (user_id, discussion_id) {
    fetch(`/api/addInterest`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        user_id, 
        discussion_id
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json();
        }
      else {
        r.json().then((err) => setErrors(err.errors));
      }
      getUser();
      getDiscussions();
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function editUserDiscussion(formData){
    fetch(`/api/discussions/${formData.id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        user_id: formData.user_id,
        topic: formData.topic,
        discussion: formData.discussion
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json();
        }
      else {
        r.json().then((err) => setErrors(err.errors));
      }
      navigate(`/UserPage`);
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function editUserComment(formData) {
    fetch(`/api/comments/${formData.id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({comment: formData.comment})
    })
    .then((r) => {
      if (r.ok) {
        r.json();
        }
      else {
        r.json().then((err) => setErrors(err.errors));
      }
      navigate(`/UserPage`);
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

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
    <div className="App">
      {/* <Navbar user={user} board={board} setSearchReturn={setSearchReturn} logOut={logOut} /> */}
   
      <Routes>
        
        <div>
          
            <Route exact path="/" element={board ? <Home addInterest={addInterest} user={user} setSearchReturn={setSearchReturn} logOut={logOut} board={searchReturn ? searchReturn : board} /> : <div className="spinner-border text-info center container" role="status"><span className="visually-hidden">Loading...</span></div> } >
            

            <Route exact path={"Login"} element={<Login logIn={logIn} errors={errors} />} />
            <Route exact path={"Logout"} element={null} />
            <Route path={user ? "ProfilePage" : "Signup"} element={user? <ProfilePage user={user}/> : <Signup signUp={signUp} />} />
            <Route exact path={"/UserPage"} element={<UserPage user={user} getUser={getUser} />} />
            {/* <Route exact path={"/UserPage/:id"} element={<UserPage user={user} />} /> */}
            
            
            <Route exact path={"/ProfileEdit"} element={<ProfileEdit user={user} userEdit={userEdit} />} />
            <Route exact path={"/Discussion"} element={<Discussion user={user} board={board} addInterest={addInterest} />} />
            <Route exact path={"/DiscussionCard"} element={<DiscussionCard  />} />
            <Route exact path={"/Discussion/:id"} element={<Discussion user={user} board={board} addInterest={addInterest} />} />
            <Route exact path={"/DiscussionForm"} element={<DiscussionForm user={user} startDiscussion={startDiscussion}/>} />
            <Route exact path={"/DiscussionForm/:id"} element={<DiscussionForm user={user} board={board} editUserDiscussion={editUserDiscussion} />} />
            <Route exact path={"/CommentForm/:id"} element={<CommentForm user={user} board={board} getDiscussions={getDiscussions} addComment={addComment} />} />
            <Route exact path={"/Discussion/:discussion_id/CommentForm/:id/"} element={<CommentForm user={user} getDiscussions={getDiscussions} board={board} editUserComment={editUserComment} />} />
            <Route exact path={"/ViewUser/:id"} element={<ViewUser user={user} />} />
          
            </Route>
        </div>
      </Routes>

      
      
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;