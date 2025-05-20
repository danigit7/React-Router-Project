import React from "react";
import logo from "../assets/Tesla.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <img src={logo} alt="Logo" className="h-12 cursor-pointer" />

      <ul className="flex space-x-8 text-gray-700 font-semibold">
        <NavLink to="/">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
        </NavLink>
        <NavLink to="/products">
          <li className="hover:text-blue-500 cursor-pointer">Products</li>
        </NavLink>
        <NavLink to="/about">
          <li className="hover:text-blue-500 cursor-pointer">About</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </NavLink>
        <NavLink to="/jobs">
          <li className="hover:text-blue-500 cursor-pointer">Jobs</li>
        </NavLink>
      </ul>

      <button
        onClick={() => navigate("/contact", { replace: true })}
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 cursor-pointer"
      >
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
