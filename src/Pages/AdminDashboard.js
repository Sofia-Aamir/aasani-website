import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { FaUserPlus, FaEdit, FaTrash } from 'react-icons/fa';

const AdminDashboard = () => {
  const [notification, setNotification] = useState("");
  // Dummy Data for Charts
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Website Views",
        data: [50, 30, 70, 40, 80, 60],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Daily Registrations",
        data: [10, 20, 15, 25, 30, 35, 40],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: [
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Dummy Data for Users
  const initialUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", registrationDate: "2023-01-10", status: "Active", cnic: "17101-567348-0" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Moderator", registrationDate: "2023-02-15", status: "Active", cnic: "17101-567348-0" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User ", registrationDate: "2023-03-20", status: "Inactive", cnic: "17101-567348-0" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User ", registrationDate: "2023-04-25", status: "Active", cnic: "17101-567348-0" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Admin", registrationDate: "2023-05-30", status: "Active", cnic: "17101-567348-0" },
    { id: 6, name: "Eva White", email: "eva@example.com", role: "Moderator", registrationDate: "2023-06-18", status: "Inactive", cnic: "17101-567348-0" },
    { id: 7, name: "Michael Green", email: "michael@example.com", role: "User ", registrationDate: "2023-07-22", status: "Active", cnic: "17101-567348-0" },
    { id: 8, name: "Sophia Black", email: "sophia@example.com", role: "Admin", registrationDate: "2023-08-11", status: "Active", cnic: "17101-567348-0" }
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [newUser , setNewUser ] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
    registrationDate: "",
    cnic: "",
  });
  const [editingUser , setEditingUser ] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Handle Search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredUsers = initialUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
    setUsers(filteredUsers);
  };

  // Add User
  const handleAddUser  = () => {
    // Check if all required fields are filled
    if (!newUser.name || !newUser.email || !newUser.role || !newUser.cnic) {
      setNotification("Please fill in all fields.");
      return;
    }
  
    // If validation passes, add the user
    setUsers([...users, { ...newUser , id: users.length + 1, registrationDate: new Date().toLocaleDateString() }]);
    setNewUser ({ name: "", email: "", role: "", status: "Active", registrationDate: "", cnic: "" });
    setIsFormVisible(false);
    setNotification(""); // Clear notification
  };

  // Edit User
  const handleEditUser  = (user) => {
    setEditingUser (user);
    setNewUser (user);
    setIsFormVisible(true);
  };

  // Save Edited User
  const handleSaveEdit = () => {
    setUsers(users.map(user => (user.id === editingUser.id ? newUser:user)));
    setEditingUser (null);
    setNewUser ({ name: "", email: "", role: "", status: "Active", registrationDate: "", cnic: "" });
    setIsFormVisible(false);
  };

  return (
    <div className="p-5 bg-[#213A57] min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-white">Admin Dashboard</h1>
      {notification && (
  <div className="bg-red-500 text-white p-3 rounded mb-4">
    {notification}
  </div>
)}

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
      <div className="bg-[#80Ed99] p-5 shadow rounded border-2 border-[#0AD1C8]">
  <h3 className="text-xl font-medium">Total Users</h3>
  <p className="text-2xl font-bold">{users.length}</p>
</div>

        <div className="bg-[#80Ed99] p-5 shadow rounded border-2 border-[#0AD1C8]">
          <h3 className="text-xl font-medium">Active Users</h3>
          <p className="text-2xl font-bold">{users.filter((user) => user.status === "Active").length}</p>
        </div>
        <div className="bg-[#80Ed99] p-5 shadow rounded border-2 border-[#0AD1C8]">
          <h3 className="text-xl font-medium">Daily Registrations</h3>
          <p className="text-2xl font-bold">35</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 mt-5 md:grid-cols-3">
        <div className="bg-white p-5 shadow rounded border-2 border-[#0AD1C8]">
          <h4 className="text-lg font-medium mb-3">Website Views</h4>
          <div style={{ width: "100%", height: "300px" }}>
            <Bar data={barData} />
          </div>
        </div>
        <div className="bg-white p-5 shadow rounded border-2 border-[#0AD1C8]">
          <h4 className="text-lg font-medium mb-3">Daily Registrations</h4>
          <div style={{ width: "100%", height: "300px" }}>
            <Line data={lineData} />
          </div>
        </div>
        <div className="bg-white p-5 shadow rounded border-2 border-[#0AD1C8]">
          <h4 className="text-lg font-medium mb-3">User  Activity</h4>
          <div style={{ width: "100%", height: "300px" }}>
            <Pie data={pieData} />
          </div>
        </div>
      </div>

      {/* User List Section */}
      <div className="mt-5">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-2xl font-medium text-white">User  List</h3>
          <button 
            onClick={() => setIsFormVisible(true)} 
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            <FaUserPlus className="inline-block mr-2" /> Add User
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search Users..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* User Table */}
        <table className="w-full table-auto bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">CNIC</th>
              <th className="p-3">Role</th>
              <th className="p-3">Registration Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.cnic}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.registrationDate}</td>
                <td className="p-3">{user.status}</td>

                <td className="p-3">
                  <button 
                    onClick={() => handleEditUser (user)} 
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => setUsers(users.filter((u) => u.id !== user.id))} 
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Form */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-medium mb-4">
              {editingUser  ? "Edit User" : "Add User"}
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  value={newUser.name} 
                  onChange={(e) => setNewUser ({ ...newUser , name: e.target.value })} 
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  value={newUser.email} 
                  onChange={(e) => setNewUser ({ ...newUser , email: e.target.value })} 
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input 
                  type="text" 
                  value={newUser.role} 
                  onChange={(e) => setNewUser ({ ...newUser , role: e.target.value })} 
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">CNIC</label>
                <input 
                  type="text" 
                  value={newUser.cnic} 
                  onChange={(e) => setNewUser ({ ...newUser , cnic: e.target.value })} 
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={newUser.status}
                  onChange={(e) => setNewUser ({ ...newUser , status: e.target.value })}
                  className="w-full px-4 py-2 border rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsFormVisible(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={editingUser  ? handleSaveEdit : handleAddUser }
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  {editingUser  ? "Save " : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;