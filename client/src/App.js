import './App.css';
import { Routes, Route, useNavigate  } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import ProfilePage from "./components/ProfilePage";
import UserPage from "./components/UserPage";
import DiscussionCard from "./components/DiscussionCard";
import Discussion from "./components/Discussion";
import CommentForm from "./components/CommentForm";
// import Footer from "./components/Footer";

function App() {
  const [board, setBoard] = useState(null);
  const [user, setUser] = useState(null);
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
        r.json().then((err) => {
          if (err.errors[0] === 'Not authorized'){
            setUser(null)
          } else {
            debugger
          console.log(err.errors)
          }})
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

  return (
    <div className="App">
      <Navbar user={user} logOut={logOut}/>
      
      <Routes>
        <div>
          {/* <Route exact path="/Login">
            
          </Route> */}
          {/* <Route exact path="/signup">
            <Signup />
          </Route> */}
          <Route exact path="/" element={board ? <Home board={board} user={user} /> : <div className="spinner-border text-info center container" role="status"><span className="visually-hidden">Loading...</span></div> } />
            <Route exact path={user ? "/Logout": "/Login"} element={user ? <Logout /> : <Login logIn={logIn} />} />
            <Route exact path={user ? "/ProfilePage" : "/Signup"} element={user? <ProfilePage user={user}/> : <Signup signUp={signUp} />} />
            <Route exact path={"/DiscussionCard"} element={<DiscussionCard logOn={user} />} />
            <Route exact path={"/Discussion/:id"} element={<Discussion user={user} />} />
            <Route exact path={"/UserPage"} element={<UserPage user={user} />} />
            <Route exact path={"/CommentForm/:id"} element={<CommentForm user={user} addComment={addComment} />} />
            
          {/* </Route> */}
        </div>
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;