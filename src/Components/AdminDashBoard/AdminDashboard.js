// AdminDashboard.js
import React, { useState} from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { FaUserPlus, FaEdit, FaTrash, FaRegEyeSlash  } from 'react-icons/fa';
import Sidebar from '../SidebarInAdminPanel/Sidebar';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export  default function AdminDashboard () {
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

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
    { id: 1, name: "John Doe", type: "Traveller", email: "john@example.com", status: "Active", registrationDate: "2023-01-10", CNIC: "17101-5679540-2",blocked:true },
    { id: 2, name: "Jane Smith", type: "Client", email: "jane@example.com", status: "Active", registrationDate: "2023-02-15", CNIC: "17101-5679540-2", blocked: false },
    { id: 3, name: "Bob Johnson", type: "Traveller", email: "bob@example.com", status: "Inactive", registrationDate: "2023-03-20", CNIC: "17101-5679540-2", blocked:true },
    { id: 4, name: "Alice Brown", type: "Traveller", email: "alice@example.com", status: "Active", registrationDate: "2023-04-25", CNIC: "17101-5679540-2",blocked:true },
    { id: 5, name: "Charlie Davis", type: "Client", email: "charlie@example.com", status: "Active", registrationDate: "2023-05-30", CNIC: "17101-5679540-2",blocked:false },
    { id: 6, name: "Eva White", type: "Client", email: "eva@example.com", status: "Inactive", registrationDate: "2023-06-18", CNIC: "17101-5679540-2",blocked:false },
    { id: 7, name: "Charlie Davis", type: "Client", email: "charlie@example.com", status: "Active", registrationDate: "2023-05-30", CNIC: "17101-5679540-2",blocked:false },
    { id: 8, name: "Eva White", type: "Client", email: "eva@example.com", status: "Inactive", registrationDate: "2023-06-18", CNIC: "17101-5679540-2",blocked:false },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [newUser   , setNewUser   ] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
    registrationDate : "",
    cnic: "",
  });
  const [editingUser   , setEditingUser   ] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  
  // Handle Search
const handleSearch = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchQuery(query);
  const filteredUsers = initialUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.type.toLowerCase().includes(query) // Corrected from user.role to user.type
  );
  setUsers(filteredUsers);
};

  // Add User
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role || !newUser.cnic) {
      setNotification("Please fill in all fields.");
      return;
    }
  
    setUsers([...users, { ...newUser   , id: users.length + 1, registrationDate: new Date().toLocaleDateString() }]);
    setNewUser   ({ name: "", email: "", role: "", status: "Active", registrationDate: "", cnic: "" });
    setIsFormVisible(false);
    setNotification(""); // Clear notification
  };

  // Edit User
  const handleEditUser    = (user) => {
    setEditingUser   (user);
    setNewUser   (user);
    setIsFormVisible(true);
  };

  // Save Edited User
  const handleSaveEdit = () => {
    setUsers(users.map(user => (user.id === editingUser.id ? newUser : user)));
    setEditingUser   (null);
    setNewUser   ({ name: "", email: "", role: "", status: "Active", registrationDate: "", cnic: "" });
    setIsFormVisible(false);
  };

  const handleIgnoreUser = (userToIgnore) => {
    setUsers(users.map((user) =>
      user.id === userToIgnore.id ? { ...user, ignored: !user.ignored } : user
    ));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5 bg-[#14919B] min-h-screen">
        <h1 className="text-3xl font-bold mb-5 text-white">Dashboard</h1>
        {notification && (
  <div className="bg-red-500 text-white p-4 rounded-lg shadow-md mb-4">
    <p className="text-sm">{notification}</p>
  </div>
)}

        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-gradient-to-r from-[#0AD1C8] to-[#80Ed99] p-5 shadow rounded-xl border-2 border-[#213A57]">
  <h3 className="text-xl font-medium flex items-center">
  {/* User Icon */}
    Latest Users
  </h3>
  <div className="flex items-center justify-between">
    <p className="text-2xl font-bold">{users.length}</p>
    <button
      onClick={() => navigate("/all-users")} // Navigate to the new page
      className="underline text-black ml-3"
    >
      View Users
    </button>
  </div>
</div>


<div className="bg-gradient-to-r from-[#0AD1C8] to-[#80Ed99] p-5 shadow rounded-xl border-2 border-[#213A57]">
  <h3 className="text-xl font-medium">Latest Traveller</h3>
  <div className="flex items-center justify-between">
    <p className="text-2xl font-bold">
      {initialUsers.filter((user) => user.type === "Traveller").length}
    </p>
    <button
      onClick={() => navigate("/all-users?type=Traveller")}
      className="underline text-black ml-3"
    >
      View Travellers
    </button>
  </div>
</div>

<div className="bg-gradient-to-r from-[#0AD1C8] to-[#80Ed99] p-5 shadow rounded-xl border-2 border-[#213A57]">
  <h3 className="text-xl font-medium">Latest Clients</h3>
  <div className="flex items-center justify-between">
    <p className="text-2xl font-bold">
      {users.filter((user) => user.type === "Client").length}
    </p>
    <button
      onClick={() => navigate("/all-users?type=Client")}
      className="underline text-black ml-3"
    >
      View Clients
    </button>
  </div>
</div>

<div
  className="bg-gradient-to-r from-[#0AD1C8] to-[#80Ed99] p-5 shadow rounded-xl border-2 border-[#213A57] cursor-pointer"
  onClick={() => navigate("/blocked-users")} // Navigate to the Blocked Users page
>
  <h3 className="text-xl font-medium">Blocked Users</h3>
  <div className="flex items-center justify-between">
    <p className="text-2xl font-bold">
      {users.filter((user) => user.blocked).length}
    </p>
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevent the outer click handler from firing
        navigate("/all-users?type=Blocked");
      }}
      className="underline text-black ml-3"
    >
      View Blocked Users
    </button>
  </div>
</div>


        </div>

        {/* Charts Section */}
        <div className="grid gap-4 mt-5 md:grid-cols-3">
          <div className="bg-white p-5 shadow rounded-xl border-2 border-[#213A57]">
            <h4 className="text-lg font-medium mb-3">Website Views</h4>
            <div style={{ width: "100%", height: "300px" }}>
              <Bar data={barData} />
            </div>
          </div>
          <div className="bg-white p-5 shadow rounded-xl border-2 border-[#213A57]">
            <h4 className="text-lg font-medium mb-3">Daily Registrations</h4>
            <div style={{ width: "100%", height: "300px" }}>
              <Line data={lineData} />
            </div>
          </div>
          <div className="bg-white p-5 shadow rounded-xl border-2 border-[#213A57]">
            <h4 className="text-lg font-medium mb-3">User   Activity</h4>
            <div style={{ width: "100%", height: "300px" }}>
              <Pie data={pieData} />
            </div>
          </div>
        </div>

        {/* User List Section */}
        <div className ="mt-5">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-2xl font-medium text-white">Latest User List</h3>
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
              className="w-full px-4 py-2 border rounded-xl"
            />
          </div>

          {/* User Table */}
          <table className="w-full table-auto bg-white shadow rounded-xl">
            <thead className="bg-[#80Ed99]">
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
                <tr key={user.id} className="border-b bg-[#ADD8E6] hover:bg-[#DEEFF5]">
                  <td className="p-3"><Link to={`/user/${user.id}`}>{user.name}</Link></td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.CNIC}</td>
                  <td className="p-3">{user.type}</td>
                  <td className="p-3">{user.registrationDate}</td>
                  <td className="p-3">{user.status}</td>

                  <td className="p-3">
  <button
    onClick={() => handleEditUser(user)}
    className="text-black px-2 py-1 rounded-xl mr-1"  // Reduced padding and margin
  >
    <FaEdit />
  </button>
  <button
    onClick={() => setUsers(users.filter((u) => u.id !== user.id))}
    className="text-red-700 px-2 py-1 rounded-xl mr-1"  // Reduced padding and margin
  >
    <FaTrash />
  </button>
  <button
    onClick={() => handleIgnoreUser(user)}
    className="text-yellow-700 px-2 py-1 rounded-xl"  // Reduced padding
  >
    <FaRegEyeSlash />
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
            <div className="bg-white p-6 rounded-xl shadow-lg w-96">
              <h3 className="text-xl font-medium mb-4">
                {editingUser   ? "Edit User" : "Add User"}
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    value={newUser.name} 
                    onChange={(e) => setNewUser  ({ ...newUser  , name: e.target.value })} 
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    value={newUser.email} 
                    onChange={(e) => setNewUser  ({ ...newUser  , email: e.target.value })} 
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <input 
                    type="text" 
                    value={newUser.role} 
                    onChange={(e) => setNewUser  ({ ...newUser  , role: e.target.value })} 
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">CNIC</label>
                  <input 
                    type="text" 
                    value={newUser.cnic} 
                    onChange={(e) => setNewUser  ({ ...newUser  , cnic: e.target.value })} 
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={newUser.status}
 onChange={(e) => setNewUser ({ ...newUser , status: e.target.value })}
                    className="w-full px-4 py-2 border rounded-xl"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsFormVisible(false)}
                    className="px-4 py-2 bg-gray-300 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={editingUser  ? handleSaveEdit : handleAddUser }
                    className="px-4 py-2 bg-green-500 text-white rounded-xl"
                  >
                    {editingUser  ? "Save" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
