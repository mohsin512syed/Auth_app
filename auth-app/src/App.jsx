import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { auth } from './firebase';

function App() {
  const [username, setUserName] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("")
      }
    })
  }, [])
  return (

    <div>
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/' element={<Home name={username} />} />
        </Routes>
      </Router>
    </div>


  )
}

export default App
