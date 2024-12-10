import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const BlockedUsers = ({ users }) => {
  const blockedUsers = users.filter(user => user.blocked);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5 bg-[#14919B] min-h-screen">
        <h1 className="text-3xl font-bold mb-5 text-white">Blocked Users</h1>
        {blockedUsers.length === 0 ? (
          <p className="text-white">No blocked users found.</p>
        ) : (
          <table className="w-full table-auto bg-white shadow rounded-xl">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">CNIC</th>
                <th className="p-3">Role</th>
                <th className="p-3">Registration Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {blockedUsers.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="p-3"><Link to={`/user/${user.id}`}>{user.name}</Link></td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.CNIC}</td>
                  <td className="p-3">{user.type}</td>
                  <td className="p-3">{user.registrationDate}</td>
                  <td className="p-3">Blocked</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BlockedUsers;
