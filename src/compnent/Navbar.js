import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [menu, setMenu] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="flex flex-wrap bg-purple-600 p-4 font-semibold justify-between text-black px-10 pt-6">
      <span className="">Portfolio</span>
      <ul className=" sm:flex flex-wrap justify-between gap-6 rounded-xl font-semibold no-underline">
        <li className="hidden sm:block md:p-0 p-1 text-md">
          <Link to="/">Home</Link>
        </li>
        <li className=" hidden sm:block md:p-0 p-1 text-md">
          <Link to="/about">About</Link>
        </li>
        <li className="hidden sm:block  md:p-0 p-1 text-md">
          <Link to="/project">Project</Link>
        </li>
        <li className="hidden sm:block  md:p-0 p-1 text-md">
          <Link to="/degree">Education</Link>
        </li>

        <li className="hidden sm:block  md:p-0 p-1 text-md">
          <Link to="/form">Form</Link>
        </li>

        <li className=" block md:p-0 p-1 text-md">
         <FaBars className="hamburger-icon"/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
