import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AttendanceDashboard from './Pages/AttendanceDashboard';
import ProfileCard from './Pages/Profile';
import Header from './Pages/Header';
import Footer from './Pages/Footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/attendance" element={<AttendanceDashboard />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
