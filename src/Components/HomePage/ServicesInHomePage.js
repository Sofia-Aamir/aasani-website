import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-[#80ED99] pb-12">
      {/* Top Section with U-Shape and Heading */}
      <div className="relative text-center mb-12">
        {/* U-Shape Background */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-11/12 md:w-8/12 h-28 bg-[#213A57] rounded-b-[50%]"
        ></div>
        {/* Heading */}
        <h2 className="relative text-white font-bold text-3xl md:text-4xl pt-4">
          Try Us And See How Good <br />
          Our Services Are.
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service Cards */}
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p- text-center flex flex-col items-center transform transition duration-300 hover:scale-105 border border-[#0AD1C8] hover:border-[#073235]"
          >
            {service.icon.endsWith(".mp4") ? (
              <video
                src={service.icon}
                className="mb-4 h-28 w-36 rounded-lg"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="mb-4 h-35 w-40 rounded-lg"
              />
            )}
            <h3 className="text-[1.375rem] font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Services Data
const servicesData = [
  {
    icon: "/Images/management.mp4", // Video file
    title: "User Management",
    description:
      "Manage your profile, verify identity, and securely store payments with ease.",
  },
  {
    icon: "/Images/task-management.mp4", // Video file
    title: "Item Listing",
    description: "List items for delivery with details and preferred times.",
  },
  {
    icon: "/Images/box.mp4", // Video file
    title: "Courier Matching",
    description:
      "Get matched with the best courier based on location and reliability.",
  },
  {
    icon: "/Images/route.mp4", // Video file
    title: "Real-Time Tracking",
    description: "Track your delivery in real-time with GPS updates.",
  },
  {
    icon: "/Images/forum.mp4", // Video file
    title: "In-App Messaging",
    description: "Communicate securely with couriers within the app.",
  },
  {
    icon: "/Images/hand-with-heart.mp4", // Video file
    title: "Rating and Review System",
    description:
      "Rate and review couriers to ensure high service standards.",
  },
  {
    icon: "/Images/money.mp4", // Video file
    title: "Payment Gateway",
    description: "Make secure payments easily with integrated options.",
  },
  {
    icon: "/Images/fulfillment.mp4", // Video file
    title: "Delivery Time Management",
    description:
      "Coordinate delivery times to suit both sender and receiver.",
  },
];

export default ServicesSection;
