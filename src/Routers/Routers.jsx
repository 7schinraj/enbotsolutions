import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from '../Components/MainComp/Main';
import Login from '../Components/AuthComp/Login/Login';
const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
    </div>
  )
}

export default Routers
