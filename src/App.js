import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './Pages/styles.css'; // Import the CSS file
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Features from './Pages/Features';
import Testimonial from './Pages/Testimonial';
import ContactUsPage from "./Pages/ContactUsPage";
import FAQ from './Pages/FAQ';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar'; // Import Navbar component
import Footer from './Pages/Footer';
import AdminDashboard from './Pages/AdminDashboard';
import Sidebar from './Pages/Sidebar';
import NotificationsPage from './Pages/NotificationsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap the pages with Navbar except for Login page */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar /> {/* Navbar will be displayed */}
              <Home />
              <Footer />
            </>
          }
        />
        <Route 
          path="/about" 
          element={
            <>
              <Navbar /> {/* Navbar will be displayed */}
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route 
          path="/features" 
          element={
            <>
              <Navbar /> {/* Navbar will be displayed */}
              <Features />
              <Footer />
            </>
          }
        />
        <Route 
          path="/testimonial" 
          element={
            <>
              <Navbar /> {/* Navbar will be displayed */}
              <Testimonial />
              <Footer />
            </>
          }
        />
        <Route 
          path="/contact-us" 
          element={
            <>
              <Navbar /> {/* Navbar will be displayed */}
              <ContactUsPage />
              <Footer />
            </>
          }
        />
        <Route 
          path="/faq" 
          element={
            <>
              <Navbar /> {/* Navbar will be displayed */}
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route 
          path="/login" 
          element={<Login />} // No Navbar for Login page
        />

<Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/notifications" element={<NotificationsPage />} />
           
            <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
