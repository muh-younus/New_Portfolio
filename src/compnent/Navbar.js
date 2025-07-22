import React from "react";
import {useState} from "react"
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Slider from './Slider';

function Navbar({toggleSlider}) {
  const [menu, setMenu] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  

  
 


  

  return (
    <nav className="flex flex-wrap bg-purple-600 p-4 font-semibold justify-between text-black px-10 pt-6">
      <div className="flex items-center gap-5">
        
          <button
          onClick={toggleSlider}
          className="p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <FaBars className="hamburger-icon text-white h-[30px]" />
        </button>
      <span className="flex item-center">Portfoli
         <span class="relative flex h-3 w-3 mt-[7px]">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
</span>
      </span>
      
      </div>
      
      <div>
       Logout
      </div>
    </nav>
  );
}

export default Navbar;
