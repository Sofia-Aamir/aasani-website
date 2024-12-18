import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaExclamationTriangle } from 'react-icons/fa';

// Mock complaint data (you should replace this with actual data fetching)
const complaints = [
  { 
    id: '35324',
    name: 'Jay Prakash',
    details: 'Application approval is due from last 7 days and getting no response...',
    status: 'GRO',
    urgency: 'Serious',
    actionDue: '8 Days',
    dateTime: '24/05 16:34 hrs'
  },
  { 
    id: '34343',
    name: 'Rohit Shah',
    details: 'Gold Loan approval related query',
    status: 'IO',
    urgency: 'Serious',
    actionDue: '8 Days',
    dateTime: '24/05 16:34 hrs'
  },
  { 
    id: '35308',
    name: 'Ambika Devi',
    details: 'Amount not credited into the loan account',
    status: 'Pending',
    urgency: 'Normal',
    actionDue: '2 Days',
    dateTime: '23/05 14:22 hrs'
  },
];

const ComplaintDetailPage = () => {
  const { id } = useParams();
  const complaint = complaints.find((c) => c.id === id);

  const [response, setResponse] = useState("");

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Response Submitted: ${response}`);
    setResponse("");
  };

  if (!complaint) {
    return <div>Complaint not found</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5 min-h-screen bg-[#14919B]">
        <div className="max-w-2xl mx-auto bg-[#80Ed99] p-6 rounded-lg shadow-lg space-y-2 mt-12">
          <div className="flex items-center space-x-4">
            <FaExclamationTriangle size={40} className="text-red-500" />
            <h2 className="text-2xl font-bold">Complaint Details</h2>
          </div>
          <p className="text-gray-700"><strong>Complaint ID:</strong> {complaint.id}</p>
          <p className="text-gray-700"><strong>Name:</strong> {complaint.name}</p>
          <p className="text-gray-700"><strong>Details:</strong> {complaint.details}</p>
          <p className="text-gray-700"><strong>Status:</strong> {complaint.status}</p>
          <p className="text-gray-700"><strong>Urgency:</strong> {complaint.urgency}</p>
          <p className="text-gray-700"><strong>Action Due:</strong> {complaint.actionDue}</p>
          <p className="text-gray-700"><strong>Date & Time:</strong> {complaint.dateTime}</p>

          <div className="mt-4">
            <label htmlFor="response" className="block text-gray-700 font-bold text-2xl">Response</label>
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
            className="mt-4 px-6 py-2 bg-[#14919B] text-white rounded-md hover:bg-[#ADD8E6] hover:text-black transition-colors"
          >
            Submit Response
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetailPage;

