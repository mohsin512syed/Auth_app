import { } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path='/Login' element={<Login/>} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>


  )
}

export default App
