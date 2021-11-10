import './App.css';
import { Routes, Route, useNavigate  } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import ProfilePage from "./components/ProfilePage";
import ProfileEdit from './components/ProfileEdit';
import UserPage from "./components/UserPage";
import DiscussionCard from "./components/DiscussionCard";
import Discussion from "./components/Discussion";
import CommentForm from "./components/CommentForm";
import DiscussionForm from './components/DiscussionForm';

// import Footer from "./components/Footer";

function App() {
  const [board, setBoard] = useState(null);
  const [user, setUser] = useState(null);
  const [searchReturn, setSearchReturn] = useState(null);
  // const [errors, setErrors] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    getDiscussions()
    getUser()
  }, []);

  function getDiscussions() {
    fetch("/discussions")
    .then((response) => response.json())
    .then((data) => setBoard(data))
    .catch((error) => console.log(error))
  }

  function getUser() {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
        })
      } else {
        r.json().then(setUser(null))
      }})
    .catch((error) => console.log(error))
  }

  function logIn (data) {
    fetch('/login',{
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
          console.log(data.username, "logged in")
          navigate('/UserPage');
        });
      } 
      else {
        r.json().then((err) => console.log(err.errors));
      }
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function logOut() {
		fetch("/logout", {
			method: "DELETE",
		}).then(() => {
      navigate("/");
			setUser(null);
			console.log(`${user.username} logged out!`);
		});
	}

  function signUp (data) {
    fetch('/signup',{
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
          console.log(data.username, "logged in")
          navigate('/UserPage');
        });
      } 
      else {
        r.json().then((err) => console.log(err.errors));
      }
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function addComment(data) {
    fetch('/comments',{
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
        r.json().then((err) => console.log(err.errors));
      }
      navigate(`/Discussion/${data.discussion_id}`);
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function startDiscussion(data) {
    fetch('/discussions',{
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
    fetch(`/userEdit/${id}`,{
      method: "PATCH",
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
        r.json().then((err) => console.log(err.errors));
      }
      navigate(`/ProfilePage`);
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function addInterest (user_id, discussion_id) {
    fetch(`/addInterest`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        user_id, 
        discussion_id
      })
    })
    .then((r) => r.json())
    // change reload to just rerender the container or button
    // .then(data => console.log(data))
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function editUserDiscussion(formData){
    fetch(`/discussions/${formData.id}`,{
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
        r.json().then((err) => console.log(err.errors));
      }
      navigate(`/UserPage`);
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  function editUserComment(formData) {
    console.log(formData);
    debugger;
    fetch(`/comments/${formData.id}`,{
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
        r.json().then((err) => console.log(err.errors));
      }
      navigate(`/UserPage`);
    })
    .catch(error => console.log("Log in incorrect: ", error))
  }

  return (
    <div className="App">
      <Navbar user={user} board={board} setSearchReturn={setSearchReturn} logOut={logOut} />
      {/* <Discussion user={user} addInterest={addInterest} /> */}
      <Routes>
        <div>
          <Route exact path="/" element={board ? <Home addInterest={addInterest} user={user} board={searchReturn ? searchReturn : board} /> : <div className="spinner-border text-info center container" role="status"><span className="visually-hidden">Loading...</span></div> } />
            <Route exact path={user ? "/Logout": "/Login"} element={user ? <Logout /> : <Login logIn={logIn} />} />
            <Route exact path={user ? "/ProfilePage" : "/Signup"} element={user? <ProfilePage user={user}/> : <Signup signUp={signUp} />} />
            <Route exact path={"/Discussion"} element={<Discussion user={user} addInterest={addInterest} />} />
            <Route exact path={"/DiscussionCard"} element={<DiscussionCard logOn={user} />} />
            <Route exact path={"/Discussion/:id"} element={<Discussion user={user} addInterest={addInterest} />} />
            <Route exact path={"/UserPage"} element={<UserPage user={user} getUser={getUser} />} />
            <Route exact path={"/CommentForm/:id"} element={<CommentForm user={user} board={board} addComment={addComment} />} />
            <Route exact path={"/DiscussionForm"} element={<DiscussionForm user={user} startDiscussion={startDiscussion}/>} />
            <Route exact path={"/DiscussionForm/:id"} element={<DiscussionForm user={user} board={board} editUserDiscussion={editUserDiscussion} />} />
            <Route exact path={"/Discussion/:discussion_id/CommentForm/:id/"} element={<CommentForm user={user} board={board} editUserComment={editUserComment} />} />
            <Route exact path={"/ProfileEdit"} element={<ProfileEdit user={user} userEdit={userEdit} />} />
        </div>
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;