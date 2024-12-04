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
      video: "./Images/route.mp4", // Path to the video in the public folder
    },
    {
      title: "Smart Delivery Scheduling",
      description:
        "Schedule deliveries at your convenience with flexible time slots and efficient route planning.",
      video: "./Images/truck.mp4", // Path to the video in the public folder
    },
    {
      title: "Secure Package Handling",
      description:
        "Your packages are handled with utmost care and delivered securely to your doorstep.",
      video: "./Images/packing.mp4", // Path to the video in the public folder
    },
    {
      title: "Personalized Delivery Preferences",
      description:
        "Allow users to set personalized preferences, such as specific delivery times, pickup points, or handling instructions, ensuring a tailored experience.",
      video: "./Images/box (1).mp4",
    },
    {
      title: "Automated Feedback System",
      description:
        "Gather customer feedback automatically after each delivery to improve services and enhance user satisfaction.",
      video: "./Images/rate.mp4",
    },
    {
      title: "Eco-Friendly Options",
      description:
        "Choose eco-friendly delivery modes to reduce carbon footprint and promote sustainability.",
      video: "./Images/transport.mp4",
    },
    {
      title: "In-App Notifications",
      description:
        "Stay updated with real-time notifications about package status and delivery updates.",
      video: "./Images/notifications.mp4",
    },
  ];

  return (
    <div className="bg-[#0B6477] py-7">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold text-white mb-8" data-aos="fade-up">
          Key Features of AASANI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              className="bg-gray-200 rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105 rounded-lg p-9 border-2 border-[#80ED99]"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
            >
              <div className="relative overflow-hidden">
                <video
                  className="object-cover mx-auto rounded-lg"
                  style={{ width: "70%", height: "auto" }}
                  src={feature.video}
                  autoPlay
                  muted
                  loop
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
              <p className=" text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
