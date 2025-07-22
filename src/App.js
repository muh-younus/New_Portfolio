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
import Slider from './compnent/Slider'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');
   const [slider,setSlider] = useState(false);
    
    const onToggle = (toggleSlider) =>{
  
      setSlider(prev => !prev);
      console.log("The slider is: ", slider);
  
  
    }

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Login setLoggedIn={setLoggedIn} setRole={setRole} />
      ) : (
        <>
          <Navbar toggleSlider={onToggle} />
          <div className="flex">
          <Slider isOpen={slider}/>
          <Routes>
            <Route path="/" element={<Home isOpen={slider} />} />
            <Route path="/about" element={<About isOpen={slider}/>} />
            <Route path="/form" element={<Form isOpen={slider}/>} />

            {role === 'admin' && (
              <>
                <Route
                  path="/degree"
                  element={
                    <ProtectedRoute
                      element={<Degree />}
                      allowedRoles={['admin']}
                      role={role}
                   isOpen={slider} />
                  }
                />
                <Route
                  path="/project"
                  element={
                    <ProtectedRoute
                      element={<Project />}
                      allowedRoles={['admin']}
                      role={role}
                    isOpen={slider}/>
                  }
                />
              </>
            )}
          </Routes>
          </div>
          
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
