import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  const features = [
    {
      title: "Real-Time Tracking",
      description:
        "Track your packages in real-time with our advanced GPS technology, ensuring transparency and reliability.",
      image: "https://via.placeholder.com/400x300", // Replace with actual image
    },
    {
      title: "Smart Delivery Scheduling",
      description:
        "Schedule deliveries at your convenience with flexible time slots and efficient route planning.",
      image: "https://via.placeholder.com/400x300", // Replace with actual image
    },
    {
      title: "Secure Package Handling",
      description:
        "Your packages are handled with utmost care and delivered securely to your doorstep.",
      image: "https://via.placeholder.com/400x300", // Replace with actual image
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-white mb-8"
          data-aos="fade-up"
        >
          Key Features of AASANI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
            >
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={feature.image}
                  alt={feature.title}
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                    Learn More
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
