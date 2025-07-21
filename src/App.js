import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './compnent/Home';
import Navbar from './compnent/Navbar';
import Footersec from './compnent/Footersec';
import Degree from './compnent/Degree';
import Project from './compnent/Project';
import About from './compnent/About';
import ProtectedRoute from './compnent/Protected';
import './App.css';
import Login from './compnent/Login';
import Form from './compnent/Form';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Login setLoggedIn={setLoggedIn} setRole={setRole} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />

            {role === 'admin' && (
              <>
                <Route
                  path="/degree"
                  element={
                    <ProtectedRoute
                      element={<Degree />}
                      allowedRoles={['admin']}
                      role={role}
                    />
                  }
                />
                <Route
                  path="/project"
                  element={
                    <ProtectedRoute
                      element={<Project />}
                      allowedRoles={['admin']}
                      role={role}
                    />
                  }
                />
              </>
            )}
          </Routes>
          
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
