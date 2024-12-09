import React, { useState } from 'react';
import { FaTachometerAlt, FaBell, FaCog } from 'react-icons/fa'; // Importing icons

const Sidebar = () => {
  const [activePage, setActivePage] = useState('dashboard'); // State to manage active page

  // Function to handle page navigation
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#213A57] text-white min-h-screen p-5">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        
        <button
          className={`w-full text-left py-3 px-4 rounded ${activePage === 'dashboard' ? 'bg-[#0AD1C8]' : ''}`}
          onClick={() => handlePageChange('admin-dashboard')}
        >
          <FaTachometerAlt className="inline-block mr-3" />
          Dashboard
        </button>
        <button
          className={`w-full text-left py-3 px-4 rounded ${activePage === 'notifications' ? 'bg-[#0AD1C8]' : ''}`}
          onClick={() => handlePageChange('notifications')}
        >
          <FaBell className="inline-block mr-3" />
          Notifications
        </button>
        <button
          className={`w-full text-left py-3 px-4 rounded ${activePage === 'settings' ? 'bg-[#0AD1C8]' : ''}`}
          onClick={() => handlePageChange('settings')}
        >
          <FaCog className="inline-block mr-3" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
