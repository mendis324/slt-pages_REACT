import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AboutUs from './pages/AboutUs.jsx';
import UserJobInfo from './pages/UserJobInfo.jsx';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/userjobinfo" element={<UserJobInfo/>} />
        

      </Routes>
    </Router>
  );
};

export default App;
