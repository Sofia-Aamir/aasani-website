import React from "react";
import { FaArrowRight, FaTruck } from 'react-icons/fa'; 

const ClientTravellerSection = () => {
  return (
    <section className="client-traveller-section py-12 bg-[#213A57]">
      <div className="container mx-auto px-6">
        {/* Flex container to align sections side by side */}
        <div className="flex flex-col sm:flex-row gap-8">
          
          {/* Client Section */}
          <div className="client-section bg-[#0AD1C8] p-8 rounded-lg shadow-lg flex-1 border-2 border-[#80ED99] hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">For Clients: Simplified Deliveries, Exceptional Service</h3>
            <ul className="list-disc pl-5">
              <li text-gray-700><strong>Easy Item Listing:</strong> Quickly list your items for delivery with all the details.</li>
              <li><strong>Real-Time Tracking:</strong> Track your delivery in real-time with GPS updates.</li>
              <li><strong>In-App Messaging:</strong> Communicate with couriers directly through the app.</li>
              <li><strong>Secure Payments:</strong> Make payments easily and securely.</li>
              <li><strong>Ratings & Reviews:</strong> Rate your couriers for future improvement.</li>
            </ul>
            <button className="bg-[#213A57] text-white py-2 px-6 mt-4 rounded-lg hover:bg-[#0AD1C8] flex items-center gap-2">
              <FaArrowRight className="h-5 w-5" /> Ready to Ship?
            </button>
          </div>

          {/* Traveller Section */}
          <div className="traveller-section bg-[#45DFB1] p-8 rounded-lg shadow-lg flex-1 border-2 border-[#80ED99] hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">For Travellers: Find Deliveries and Earn on the Go</h3>
            <ul className="list-disc pl-5">
              <li text-gray-700><strong>Courier Matching:</strong> Get matched with delivery opportunities based on location.</li>
              <li><strong>Flexible Scheduling:</strong> Choose delivery times that fit your schedule.</li>
              <li><strong>Real-Time Notifications:</strong> Receive instant updates on available deliveries.</li>
              <li><strong>Ratings & Reviews:</strong> Build your reputation through client feedback.</li>
              <li><strong>Secure Payments:</strong> Receive secure payments directly through the app.</li>
            </ul>
            <button className="bg-[#213A57] text-white py-2 px-6 mt-4 rounded-lg hover:bg-[#0AD1C8] flex items-center gap-2">
              <FaTruck className="h-5 w-5" /> Start Travelling
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientTravellerSection;
