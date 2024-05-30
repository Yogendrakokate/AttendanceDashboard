import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileCard from '../Pages/Profile';
import AttendanceDashboard from '../Pages/AttendanceDashboard';
import Header from '../Pages/Header';


const RouterComponent = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/attendance" element={<AttendanceDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterComponent;
