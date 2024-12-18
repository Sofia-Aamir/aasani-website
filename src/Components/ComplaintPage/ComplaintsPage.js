import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaSearch, FaFilter } from 'react-icons/fa';
import Sidebar from '../SidebarInAdminPanel/Sidebar';

// Sample data structure
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
  // Add more sample data as needed
];

const stats = [
  { label: 'Total Complaints', count: 123 },
  { label: 'Resolved', count: 23 },
  { label: 'Un-Resolved', count: 92 },
];

const ComplaintsPage = () => {
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectComplaint = (id) => {
    setSelectedComplaints(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedComplaints(complaints.map(complaint => complaint.id));
    } else {
      setSelectedComplaints([]);
    }
  };

  const filteredComplaints = complaints.filter(complaint =>
    complaint.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
    complaint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    complaint.id.includes(searchTerm)
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5 bg-[#14919B] min-h-screen">
        <h1 className="text-3xl font-bold mb-5 text-white">Complaints</h1>

        {/* Stats Bar */}
        <div className="bg-[#80Ed99] p-5 rounded-xl shadow mb-5">
          <div className="flex gap-4 mb-4">
            {stats.map((stat, index) => (
              <button
                key={index}
                className="text-sm text-black transition-colors"
              >
                {stat.label} <span className="font-bold">{stat.count}</span>
              </button>
            ))}
          </div>

          {/* Actions Bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search Complaint" 
                className="pl-10 pr-4 py-2 border border-[#ADD8E6] rounded-full focus:outline-none focus:ring-2 focus:ring-[#14919B]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[#14919B] text-white rounded-full hover:bg-[#ADD8E6] hover:text-black transition-colors">Read</button>
              <button className="px-4 py-2 bg-[#14919B] text-white rounded-full hover:bg-[#ADD8E6] hover:text-black transition-colors">Unread</button>
              <button className="px-4 py-2 bg-[#14919B] text-white rounded-full hover:bg-[#ADD8E6] hover:text-black transition-colors">Accept</button>
              <button className="px-4 py-2 bg-[#14919B] text-white rounded-full hover:bg-[#ADD8E6] hover:text-black transition-colors">Reject</button>
              <button className="px-4 py-2 bg-[#14919B] text-white rounded-full hover:bg-[#ADD8E6] hover:text-black transition-colors flex items-center gap-2">
                <FaFilter />
                Filters
              </button>
            </div>
          </div>

          {/* Complaints Table */}
          <div className="overflow-x-auto bg-white rounded-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-[#14919B] text-white">
                  <th className="p-3 text-left">
                    <input 
                      type="checkbox" 
                      onChange={handleSelectAll}
                      checked={selectedComplaints.length === complaints.length}
                      className="rounded text-[#80Ed99] focus:ring-[#80Ed99]"
                    />
                  </th>
                  <th className="p-3 text-left">Unique Id</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">COMPLAINT DETAILS</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Urgency</th>
                  <th className="p-3 text-left">Action Due</th>
                  <th className="p-3 text-left">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredComplaints.map((complaint, index) => (
                  <tr key={complaint.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F0F8FF] hover:bg-gray-100 cursor-pointer'}>
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={selectedComplaints.includes(complaint.id)}
                        onChange={() => handleSelectComplaint(complaint.id)}
                        className="rounded text-[#80Ed99] focus:ring-[#80Ed99]"
                      />
                    </td>
                    <td className="p-3">
                      <Link to={`/complaint/${complaint.id}`} className="hover:underline">
                        {complaint.id}
                      </Link>
                    </td>
                    <td className="p-3">{complaint.name}</td>
                    <td className="p-3 max-w-md">
                      <Link to={`/complaint/${complaint.id}`} className="flex items-start gap-2 hover:underline">
                        <FaExclamationCircle className="text-yellow-600 mt-1 flex-shrink-0" />
                        <span className="line-clamp-2">{complaint.details}</span>
                      </Link>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-[#80Ed99] text-[#14919B] rounded-full text-sm font-medium">
                        {complaint.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={complaint.urgency === 'Serious' ? 'text-red-600 font-medium' : 'text-green-600'}>
                        {complaint.urgency}
                      </span>
                    </td>
                    <td className="p-3">{complaint.actionDue}</td>
                    <td className="p-3">{complaint.dateTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;

