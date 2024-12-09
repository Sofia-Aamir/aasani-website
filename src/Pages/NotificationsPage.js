import React, { useState } from 'react';
import { FaPaperPlane, FaBullhorn } from 'react-icons/fa'; // Importing the announcement icon
import Sidebar from './Sidebar';

const NotificationsPage = () => {
  const [announcements] = useState([
    { id: 1, message: "System maintenance scheduled for 12 AM - 2 AM.", date: "2023-10-01" },
    { id: 2, message: "New features added to the dashboard.", date: "2023-10-02" },
    { id: 3, message: "User  feedback survey is now live!", date: "2023-10-03" },
    { id: 4, message: "User  feedback survey is now live!", date: "2023-10-03" },
  ]);

  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: userMessage }]);
      setUserMessage("");
    }
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Include the Sidebar here */}
      <div className="flex-1 p-5 bg-[#14919B] min-h-screen">
        <h1 className="text-3xl font-bold mb-5 text-white">Notifications & Messages</h1>

        {/* Announcements Section */}
        <div className="p-5 rounded-xl shadow mb-5 bg-[#80Ed99]">
          <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
          <ul>
            {announcements.map((announcement) => (
              <li key={announcement.id} className="border-b py-2 flex items-start">
                <FaBullhorn className="text-[#14919B] mr-2" /> {/* Announcement icon */}
                <div>
                  <p className="text-black">{announcement.message}</p>
                  <span className="text-gray-700 text-sm">{announcement.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* User Messages Section */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <div className="flex mb-4">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-xl p-2"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 rounded ml-2 flex items-center"
            >
              <FaPaperPlane className="mr-1" /> Send
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-2 rounded-xl">Sent Messages</h3>
          <ul>
            {messages.map((msg) => (
              <li key={msg.id} className="border-b py-2">
                <p className="text-gray-700">{msg.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;