import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import RevolutionizingDeliverySection from './RevolutionizingDeliverySection';  // Import the new section

const HeroSection = () => {
  return (
    <div>
      <div className="relative">
        {/* Background Video */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/Images/backgroundvideo.mp4" type="video/mp4" />
        </video>

        {/* Transparent Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0B6477] bg-opacity-60 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between px-10 h-full">
          {/* Image Section */}
          <div className="relative flex justify-center md:justify-start">
            <img
              src="/Images/homeimage.png"
              alt="Home"
              className="h-70 w-auto sm:h-200 md:h-200 relative md:-translate-x-16" // Moves the image left on large screens
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center text-left max-w-md ml-6 sm:mt-0 md:mt-10 md:pb-10 md:-translate-x-40 pb-8">
            {/* Trusted Couriers Text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold md:font-bold sm:font-bold leading-tight text-[#213A57] text-center md:text-left">
              <span className="sm:font-bold">Trusted Couriers,</span>
              <br />
              <span className="sm:font-bold">Anytime,</span>
              <br />
              <span className="sm:font-bold">Anywhere.</span>
            </h1>

            {/* Short Paragraph */}
            <p className="mt-4 text-lg text-center md:text-left">
              We provide fast, reliable, and convenient courier services wherever you are. 
              Your trusted partner in every delivery. Experience excellence in every step of the journey.
            </p>

            {/* Buttons Section */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center sm:space-x-4 sm:items-center sm:space-y-0">
              {/* Sign Up Button */}
              <button className="bg-[#80ED99] text-[#073235] py-2 px-6 rounded-md flex items-center space-x-2 hover:bg-[#0AD1C8] transition-all">
                <FaUser size={20} />
                <span>Sign Up</span>
              </button>

              {/* Download Button */}
              <button className="bg-[#80ED99] text-[#073235] py-2 px-6 rounded-md flex items-center space-x-2 hover:bg-[#0AD1C8] transition-all">
                <AiOutlineDownload size={20} />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Import and Render the New Section */}
      <RevolutionizingDeliverySection />
    </div>
  );
};

export default HeroSection;
