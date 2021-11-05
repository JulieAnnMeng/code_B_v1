import './App.css';
import { Routes, Route, useNavigate  } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
// import Footer from "./components/Footer";

function App() {
  const [board, setBoard] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getDiscussions()
    // getUser()
  }, []);

  function getDiscussions() {
    fetch("/discussions")
    .then((response) => response.json())
    .then((data) => setBoard(data))
    .catch((error) => console.log(error))
  }

  function logIn (e, data) {
    e.preventDefault();
    fetch('/login',{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        username: data.username,
        password: data.password
    })})
    .then(res => res.json())
    .then(user => {
      console.log(user);
    })
    .catch(error => console.log("Log in incorrect: ", error))
    navigate.push('/User')
  }

  console.log(board)

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <div>
          {/* <Route exact path="/Login">
            
          </Route> */}
          {/* <Route exact path="/signup">
            <Signup />
          </Route> */}
          <Route exact path="/" element={board ? <Home board={board} /> : <div class="spinner-border text-info center container" role="status"><span class="visually-hidden">Loading...</span></div> } />
            <Route exact path={user ? "/Logout": "/Login"} element={user ? <Logout /> : <Login logIn={logIn} />} />
            <Route exact path={user ? null : "/Signup"} element={<Signup />} />
            
          {/* </Route> */}
        </div>
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;