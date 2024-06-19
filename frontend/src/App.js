import "./App.css";
// import Home from "./Pages/Home";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Comps/Nav';
import Footer from "./Pages/Footer";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import HostHackathon from "./Pages/HostHackathon";

function App() {
  return (
    <>
    <Router>
      
      <Nav />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/hosthackathon" element={<HostHackathon/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
