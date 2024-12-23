import React, { useState } from "react";
import { FaBars, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";
import  { setSearch } from "../redux/slices/Searchslice" 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const  dispatch = useDispatch();

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/src/assets/logo.png" 
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 w-full max-w-md ml-4">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search Location"
            className="bg-transparent outline-none text-gray-600 w-full"
          />
        </div>
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 flex-grow">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="Search for places, cuisines, and more..."
            className="bg-transparent outline-none text-gray-600 w-full"
          />
        </div>
      </div>

      {/* Right Section: Login and Hamburger */}
      <div className="flex items-center space-x-4">
        <button className="text-pink-500 border border-pink-500 rounded-md px-4 py-2 hover:bg-pink-100">
          Login
        </button>
        <div className="relative">
          <button
            className="text-gray-600 text-xl"
            onClick={toggleDropdown}
          >
            <FaBars />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40">
              <a
                href="#home"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Home
              </a>
              <a
                href="#store"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Store
              </a>
              <a
                href="#orders"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Orders
              </a>
              <a
                href="#profile"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
