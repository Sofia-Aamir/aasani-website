import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './Pages/styles.css'; // Import the CSS file
import Navbar from './Pages/Navbar'; // Import the Navbar component
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include the Navbar component */}
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<AboutUs />} />
        </Routes>
<Footer/>
      </div>
    </Router>
  );
}


export default App;

 // <Route path="/about" element={<About />} />
          // <Route path="/features" element={<Features />} />
          // <Route path="/testimonial" element={<Testimonial />} />
          // <Route path="/contact" element={<Contact />} />
          // <Route path="/login" element={<Login />} /> */}