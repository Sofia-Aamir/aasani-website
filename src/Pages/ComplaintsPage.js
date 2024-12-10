import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaExclamationCircle } from 'react-icons/fa';

const complaints = [
  { id: 1, title: "Complaint about service delay", author: "John Doe" },
  { id: 2, title: "Issue with product quality", author: "Jane Smith" },
  { id: 3, title: "Late delivery of orders", author: "Mike Johnson" },
  { id: 4, title: "Broken item upon arrival", author: "Sarah Lee" },
  { id: 5, title: "Website is down", author: "Chris Evans" },
  { id: 6, title: "Poor customer support", author: "Emily Clark" },
  { id: 7, title: "Package lost in transit", author: "Lucas Brown" },
  { id: 8, title: "Incorrect billing", author: "Olivia Turner" },
  { id: 9, title: "Unresponsive phone line", author: "James White" },
  { id: 10, title: "Account was hacked", author: "Lily Taylor" },
];

const ComplaintsPage = () => {
  const navigate = useNavigate();

  const handleClickComplaint = (id) => {
    navigate(`/complaint/${id}`); // Navigate to the individual complaint page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 p-5 min-h-screen bg-[#14919B]">
        <h2 className="text-2xl font-bold mb-4 text-white">Complaints</h2>

        <ul className="space-y-2">
          {complaints.map((complaint) => (
            <li key={complaint.id} className="p-4 bg-[#ADD8E6] rounded-md flex items-center">
              {/* Add the FaExclamation icon */}
              <FaExclamationCircle className="mr-3 text-yellow-600" />
              <button 
                onClick={() => handleClickComplaint(complaint.id)} 
                className="text-black hover:underline"
              >
                {complaint.title} - <span className="italic">by {complaint.author}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComplaintsPage;
