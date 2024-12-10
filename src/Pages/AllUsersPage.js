import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

export default function AllUsersPage() {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", type: "Traveller", status: "Active", registrationDate: "2023-01-10", cnic: "12345-6789012-3", blocked: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", type: "Client", status: "Inactive", registrationDate: "2023-02-20", cnic: "12345-6789012-4", blocked: true },
    { id: 3, name: "Alice Brown", email: "alice@example.com", type: "Traveller", status: "Active", registrationDate: "2023-03-15", cnic: "12345-6789012-5", blocked: false },
    { id: 4, name: "Bob Johnson", email: "bob@example.com", type: "Client", status: "Inactive", registrationDate: "2023-04-10", cnic: "12345-6789012-6", blocked: false },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", type: "Traveller", status: "Active", registrationDate: "2023-05-05", cnic: "12345-6789012-7", blocked: true },
    { id: 6, name: "Diana Evans", email: "diana@example.com", type: "Client", status: "Inactive", registrationDate: "2023-06-12", cnic: "12345-6789012-8", blocked: false },
    { id: 7, name: "Evan Lewis", email: "evan@example.com", type: "Traveller", status: "Active", registrationDate: "2023-07-01", cnic: "12345-6789012-9", blocked: true },
    { id: 8, name: "Fiona Harris", email: "fiona@example.com", type: "Client", status: "Inactive", registrationDate: "2023-08-08", cnic: "12345-6789013-0", blocked: false },
    { id: 9, name: "George Walker", email: "george@example.com", type: "Traveller", status: "Active", registrationDate: "2023-09-18", cnic: "12345-6789013-1", blocked: true },
    { id: 10, name: "Hannah King", email: "hannah@example.com", type: "Client", status: "Inactive", registrationDate: "2023-10-22", cnic: "12345-6789013-2", blocked: false },
    { id: 11, name: "Ian Morgan", email: "ian@example.com", type: "Traveller", status: "Active", registrationDate: "2023-11-15", cnic: "12345-6789013-3", blocked: false },
    { id: 12, name: "Jasmine Carter", email: "jasmine@example.com", type: "Client", status: "Inactive", registrationDate: "2023-12-01", cnic: "12345-6789013-4", blocked: true },
    { id: 13, name: "Kevin Parker", email: "kevin@example.com", type: "Traveller", status: "Active", registrationDate: "2024-01-10", cnic: "12345-6789013-5", blocked: false },
    { id: 14, name: "Laura Stewart", email: "laura@example.com", type: "Client", status: "Inactive", registrationDate: "2024-02-05", cnic: "12345-6789013-6", blocked: false },
    { id: 15, name: "Mark Scott", email: "mark@example.com", type: "Traveller", status: "Active", registrationDate: "2024-03-20", cnic: "12345-6789013-7", blocked: true },
    { id: 16, name: "Nina Cooper", email: "nina@example.com", type: "Client", status: "Inactive", registrationDate: "2024-04-12", cnic: "12345-6789013-8", blocked: true },
    { id: 17, name: "Oscar Reed", email: "oscar@example.com", type: "Traveller", status: "Active", registrationDate: "2024-05-07", cnic: "12345-6789013-9", blocked: false },
    { id: 18, name: "Paula Bennett", email: "paula@example.com", type: "Client", status: "Inactive", registrationDate: "2024-06-30", cnic: "12345-6789020-1", blocked: true },
    { id: 19, name: "Quinn Foster", email: "quinn@example.com", type: "Traveller", status: "Active", registrationDate: "2024-07-19", cnic: "12345-6789020-2", blocked: false },
    { id: 20, name: "Rachel Cook", email: "rachel@example.com", type: "Client", status: "Inactive", registrationDate: "2024-08-09", cnic: "12345-6789020-3", blocked: true },
    { id: 21, name: "Sam Wilson", email: "sam@example.com", type: "Traveller", status: "Active", registrationDate: "2024-09-25", cnic: "12345-6789020-4", blocked: false },
    { id: 22, name: "Tina Adams", email: "tina@example.com", type: "Client", status: "Inactive", registrationDate: "2024-10-12", cnic: "12345-6789020-5", blocked: true },
    { id: 23, name: "Uma Patel", email: "uma@example.com", type: "Traveller", status: "Active", registrationDate: "2024-11-01", cnic: "12345-6789020-6", blocked: false },
    { id: 24, name: "Victor Bell", email: "victor@example.com", type: "Client", status: "Inactive", registrationDate: "2024-12-14", cnic: "12345-6789020-7", blocked: true },
    { id: 25, name: "Wendy Collins", email: "wendy@example.com", type: "Traveller", status: "Active", registrationDate: "2024-12-29", cnic: "12345-6789020-8", blocked: true },
    { id: 26, name: "Xander Holmes", email: "xander@example.com", type: "Client", status: "Inactive", registrationDate: "2025-01-08", cnic: "12345-6789020-9", blocked: false },
    { id: 27, name: "Yvonne Edwards", email: "yvonne@example.com", type: "Traveller", status: "Active", registrationDate: "2025-01-25", cnic: "12345-6789021-0", blocked: true },
    { id: 28, name: "Zack Miller", email: "zack@example.com", type: "Client", status: "Inactive", registrationDate: "2025-02-10", cnic: "12345-6789021-1", blocked: false },
    // Add more users here...
  ]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterType = queryParams.get("type");

  const filteredUsers = filterType
    ? filterType === "Blocked"
      ? users.filter((user) => user.blocked)
      : users.filter((user) => user.type === filterType)
    : users;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5 min-h-screen bg-[#14919B]">
        <h1 className="text-3xl font-bold mb-5 text-white">
          {filterType === "Blocked" ? "Blocked Users" : filterType ? `All ${filterType}s` : "All Users"}
        </h1>
        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-[#80Ed99]">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Registration Date</th>
              <th className="p-3">CNIC</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b bg-[#ADD8E6] hover:bg-[#DEEFF5]">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.type}</td>
                <td className="p-3">{user.status}</td>
                <td className="p-3">{user.registrationDate}</td>
                <td className="p-3">{user.cnic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}