import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './Pages/UserContext'; // Import UserProvider
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Features from './Pages/Features';
import Testimonial from './Pages/Testimonial';
import ContactUsPage from "./Pages/ContactUsPage";
import FAQ from './Pages/FAQ';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import AdminDashboard from './Pages/AdminDashboard';
import NotificationsPage from './Pages/NotificationsPage';
import UserProfile from './Pages/UserProfile';
import BlockedUsers from './Pages/BlockedUsers';
import AllUsersPage from './Pages/AllUsersPage';
import ComplaintsPage from './Pages/ComplaintsPage';
import ComplaintDetailPage from './Pages/ComplaintDetailPage';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", type: "Traveller", email: "john@example.com", status: "Active", registrationDate: "2023-01-10", CNIC: "17101-5679540-2",blocked:true },
    { id: 2, name: "Jane Smith", type: "Client", email: "jane@example.com", status: "Active", registrationDate: "2023-02-15", CNIC: "17101-5679540-2", blocked: false },
    { id: 3, name: "Bob Johnson", type: "Traveller", email: "bob@example.com", status: "Inactive", registrationDate: "2023-03-20", CNIC: "17101-5679540-2", blocked:true },
    { id: 4, name: "Alice Brown", type: "Traveller", email: "alice@example.com", status: "Active", registrationDate: "2023-04-25", CNIC: "17101-5679540-2",blocked:true },
    { id: 5, name: "Charlie Davis", type: "Client", email: "charlie@example.com", status: "Active", registrationDate: "2023-05-30", CNIC: "17101-5679540-2",blocked:false },
    { id: 6, name: "Eva White", type: "Client", email: "eva@example.com", status: "Inactive", registrationDate: "2023-06-18", CNIC: "17101-5679540-2",blocked:false },
    { id: 7, name: "Charlie Davis", type: "Client", email: "charlie@example.com", status: "Active", registrationDate: "2023-05-30", CNIC: "17101-5679540-2",blocked:false },
    { id: 8, name: "Eva White", type: "Client", email: "eva@example.com", status: "Inactive", registrationDate: "2023-06-18", CNIC: "17101-5679540-2",blocked:false },
  ]);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><AboutUs /><Footer /></>} />
          <Route path="/features" element={<><Navbar /><Features /><Footer /></>} />
          <Route path="/testimonial" element={<><Navbar /><Testimonial /><Footer /></>} />
          <Route path="/contact-us" element={<><Navbar /><ContactUsPage /><Footer /></>} />
          <Route path="/faq" element={<><Navbar /><FAQ /><Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard users={users} setUsers={setUsers} />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/user/:id" element={<UserProfile users={users} />} /> {/* Corrected line */}
          <Route path="/blocked-users" element={<BlockedUsers users={users} />} />
          <Route path="/all-users" element={<AllUsersPage />} />
          <Route path="/complaints" element={<ComplaintsPage />} />
          <Route path="/complaint/:id" element={<ComplaintDetailPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;