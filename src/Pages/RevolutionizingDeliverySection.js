import React from 'react';

const RevolutionizingDeliverySection = () => {
  return (
    <section className="bg-[#14919B] py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/Images/homepage2ndimage.png"
            alt="Revolutionizing Delivery"
            className="h-100 w-auto sm:h-200 md:h-200 relative md:-translate-x-16"
          />
        </div>

        {/* Text Section */}
        <div className="text-white flex flex-col justify-center text-left max-w-md ml-6 sm:mt-0 md:mt-10 md:pb-10 md:-translate-x-40 pb-8">
          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight text-center md:text-left">
            Revolutionizing Delivery,
            <br />
            One Trip at a Time.
          </h2>

          {/* Paragraphs */}
          <p className="mt-6 text-lg text-center md:text-left">
            AASANI connects you with trusted couriers to make deliveries ​faster, affordable, and secure. Our user-friendly platform lets ​you easily track and manage your shipments, providing a ​reliable solution for all your delivery needs.
          </p>
          <p className="mt-4 text-lg text-center md:text-left">
            Join us in creating a smarter, more sustainable way to send ​and receive goods, while building a community you can trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevolutionizingDeliverySection;
