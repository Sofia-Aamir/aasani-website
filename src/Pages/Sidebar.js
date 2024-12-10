import React, { useState } from 'react';
import { FaTachometerAlt, FaBell, FaExclamationCircle, FaBars, FaSignOutAlt } from 'react-icons/fa'; // Importing icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clear session, tokens)
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="w-64 bg-[#213A57] text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      {/* Burger Menu Icon for Small Screens */}
      <div className="md:hidden flex justify-between items-center mb-6">
        <button onClick={toggleMenu} className="text-white">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar Links - These links are hidden on small screens by default */}
      <div className={`space-y-4 md:block ${menuOpen ? 'block' : 'hidden'}`}>
        <button
          className="w-full text-left py-3 px-4 rounded hover:bg-[#0AD1C8]"
          onClick={() => navigate('/admin-dashboard')}
        >
          <FaTachometerAlt className="inline-block mr-3" />
          Dashboard
        </button>
        <button
          className="w-full text-left py-3 px-4 rounded hover:bg-[#0AD1C8]"
          onClick={() => navigate('/notifications')}
        >
          <FaBell className="inline-block mr-3" />
          Notifications
        </button>
        <button
          className="w-full text-left py-3 px-4 rounded hover:bg-[#0AD1C8]"
          onClick={() => navigate('/complaints')}
        >
           <FaExclamationCircle className="inline-block mr-3" /> 
         Complaints
        </button>

        {/* Logout Button */}
        <button
          className="w-full bg-[#F44336] text-left py-3 px-4 rounded hover:bg-[#F44336]"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="inline-block mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
