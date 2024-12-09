import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="bg-gradient-to-r from-[#0AD1C8] to-[#073235] text-[#F2E5BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Centering items */} 
          
          {/* Left Side: Logo and AASANI Name */}
          <div className="flex items-center space-x-3">
            <img src="/Images/logo.png" alt="Logo" className="h-12 w-12" /> {/* Logo Image */}
            <span className="text-2xl font-semibold">AASANI</span>
          </div>

          {/* Center: Desktop Navigation Links */}
         {/* Center: Desktop Navigation Links */}
<div className="hidden md:flex flex-1 justify-center space-x-4"> 
  <Link 
    to="/" 
    className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
  >
    {/* Location icon */}
    <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
    Home
    {/* Hover underline */}
    <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
  </Link>

  <Link 
    to="/about" 
    className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
  >
    <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
    About Us
    <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
  </Link>

  <Link 
    to="/features" 
    className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
  >
      <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
    Features
    <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
  </Link>

  <Link 
    to="/testimonial" 
    className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
  >
      <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
    Testimonial
    <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
  </Link>

  <Link 
    to="/faq" 
    className="relative text-lg hover:text-[#FFD700] flex items-center group transition-all"
  >
      <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
   FAQ
    <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
  </Link>
</div>


          {/* Right Side: Search Bar and Login Button */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <input 
              type="text" 
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-[#073235] text-[#F2E5BF] border border-[#0AD1C8] placeholder-[#F2E5BF]"
            />
            <Link 
              to="/login" 
              className="bg-[#80ED99] text-[#073235] py-2 px-4 rounded-md flex items-center space-x-2"
            >
              <AiOutlineLogin size={20} />
              <span>Login</span>
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Login Icon next to Burger */}
            {/* <Link 
              to="/login" 
              className="bg-[#80ED99] text-[#073235] py-2 px-4 rounded-md flex items-center space-x-2"
              style={{ transform: 'translateX(-10px)' }}
            >
              <AiOutlineLogin size={20} />
              <span>Login</span>
            </Link> */}

            <button onClick={toggleMenu} className="text-[#FFF5E4]">
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0AD1C8] px-4 pb-4">
          {/* Navigation Links */}
          <Link 
            to="/" 
            onClick={toggleMenu} 
            className="relative block py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            {/* Location icon */}
            <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" />
            Home
            <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
          </Link>

          <Link 
            to="/about" 
            onClick={toggleMenu} 
            className="relative block py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
            About Us
            <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
          </Link>

          <Link 
            to="/features" 
            onClick={toggleMenu} 
            className="relative block py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
            Features
            <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
          </Link>

          <Link 
            to="/testimonial" 
            onClick={toggleMenu} 
            className="relative block py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
            Testimonial
            <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
          </Link>

          <Link 
            to="/contact" 
            onClick={toggleMenu} 
            className="relative block py-2 text-lg hover:text-[#FFD700] flex items-center group transition-all"
          >
            <FaMapMarkerAlt className="mr-2 text-transparent group-hover:text-[#FFD700] transition-all" /> 
            Contact Us
            <span className="absolute left-2 bottom-[-2px] w-0 h-[2px] bg-[#FFD700] transition-all group-hover:w-full"></span> 
          </Link>

          {/* Search Bar */}
          {/* <div className="mt-4 flex justify-center">
            <input 
              type="text" 
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-[#073235] text-[#F2E5BF] border border-[#0AD1C8] placeholder-[#F2E5BF] w-full"
            />
          </div> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
