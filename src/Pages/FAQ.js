import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-6 bg-[#0B6477] sm:py-16 lg:py-6">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-center font-bold text-white mb-8">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-5">
          <div 
            className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            data-aos="fade-up" // Add AOS animation
          >
            <button
              type="button"
              onClick={() => toggleAnswer(0)}
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">How do I track my package?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-gray-400 transform ${activeIndex === 0 ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === 0 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>You can track your package by entering the tracking number provided to you during shipment in the 'Track Your Order' section of the app. You will get real-time updates on your package status.</p>
              </div>
            )}
          </div>

          <div 
            className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            data-aos="fade-up" // Add AOS animation
          >
            <button
              type="button"
              onClick={() => toggleAnswer(1)}
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">Can I change the delivery address?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-gray-400 transform ${activeIndex === 1 ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === 1 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>Yes, you can change the delivery address as long as the shipment has not yet been dispatched. Simply update your address through the app, and we'll make sure your package gets delivered to the right place.</p>
              </div>
            )}
          </div>

          <div 
            className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            data-aos="fade-up" // Add AOS animation
          >
            <button
              type="button"
              onClick={() => toggleAnswer(2)}
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">How do I cancel a shipment?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-gray-400 transform ${activeIndex === 2 ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === 2 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>If you need to cancel a shipment, please go to your order details in the app and select the 'Cancel Shipment' option. If the shipment is already on the way, we will assist you in redirecting it to a different address if possible.</p>
              </div>
            )}
          </div>

          <div 
            className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            data-aos="fade-up" // Add AOS animation
          >
            <button
              type="button"
              onClick={() => toggleAnswer(3)}
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">Do you offer cash on delivery?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-gray-400 transform ${activeIndex === 3 ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === 3 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>Yes, we offer cash on delivery for certain packages. You can select this option during the checkout process. Make sure to check if it's available for your delivery location.</p>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-white text-base mt-9">
          Still have questions?{" "}
          <Link to="/contact-us" className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
