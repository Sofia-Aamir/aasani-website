import React from 'react';
import { FaTachometerAlt, FaBell, FaCog } from 'react-icons/fa'; // Importing icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="w-64 bg-[#213A57] text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      
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
        onClick={() => navigate('/settings')}
      >
        <FaCog className="inline-block mr-3" />
        Settings
      </button>
    </div>
  );
};

export default Sidebar;