import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaExclamationTriangle } from 'react-icons/fa'; // For the complaint icon

// Mock complaint data
const complaints = [
  { id: 1, title: "Complaint about service delay", author: "John Doe", date: "2024-12-10", description: "Service was delayed for more than 2 hours." },
  { id: 2, title: "Issue with product quality", author: "Jane Smith", date: "2024-12-08", description: "The product received was damaged and of poor quality." },
  { id: 3, title: "Late delivery of orders", author: "Mike Johnson", date: "2024-12-09", description: "Order arrived 3 days later than expected." },
  // Add more complaints as needed
];

const ComplaintDetailPage = () => {
  const { id } = useParams(); // Get the complaint ID from the URL
  const complaint = complaints.find((complaint) => complaint.id === parseInt(id)); // Find the complaint by ID

  const [response, setResponse] = useState("");

  const handleResponseChange = (event) => {
    setResponse(event.target.value); // Update the response as user types
  };

  const handleSubmit = () => {
    alert(`Response Submitted: ${response}`); // Handle the response submission (you can send this to your server)
    setResponse(""); // Clear the response text
  };

  if (!complaint) {
    return <div>Complaint not found</div>; // Return if complaint is not found
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 p-5 min-h-screen bg-[#14919B]">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4 mt-12">
          {/* Complaint Card */}
          <div className="flex items-center space-x-4">
            <FaExclamationTriangle size={40} className="text-red-500" />
            <h2 className="text-2xl font-bold">{complaint.title}</h2>
          </div>
          <p className="text-gray-700"><strong>By:</strong> {complaint.author}</p>
          <p className="text-gray-700"><strong>Date:</strong> {complaint.date}</p>
          <p className="text-gray-700"><strong>Description:</strong> {complaint.description}</p>

          {/* Response Area */}
          <div className="mt-4">
            <label htmlFor="response" className="block text-gray-700">Response</label>
            <textarea
              id="response"
              rows="4"
              className="w-full p-3 mt-2 border rounded-md"
              value={response}
              onChange={handleResponseChange}
              placeholder="Type your response here..."
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit Response
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetailPage;
