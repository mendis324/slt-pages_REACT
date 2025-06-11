import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AboutUs from './pages/AboutUs.jsx';
import UserJobInfo from './pages/UserJobInfo.jsx';
import ApplyJobForm from './pages/ApplyJobForm';
import JobStatus from './pages/JobStatus'; 
import JobCreation from './pages/JobCreation';  
import JobModification from './pages/JobModification'; 
import ReceivedCVs from './pages/ReceivedCVs'; 
import FinalAcceptedCVs from './pages/FinalAcceptedCVs';









const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/userjobinfo" element={<UserJobInfo/>} />
        <Route path="/apply" element={<ApplyJobForm />} />
        <Route path="/jobstatus" element={<JobStatus />} />
        <Route path="/createjob" element={<JobCreation />} />
        <Route path="/jobmodification" element={<JobModification />} />
        <Route path="/receivedcvs" element={<ReceivedCVs />} />
        <Route path="/acceptedcvs" element={<FinalAcceptedCVs />} />






        

      </Routes>
    </Router>
  );
};

export default App;
