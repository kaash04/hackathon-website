import "./App.css";
import Home from "./Pages/Home";
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Home/>
        <Routes>
          <Route path="/a" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
