import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import CustomerSatisfaction from './CustomerSatisfaction';
import ContactUsSection from "./ContactUsSection";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
    <section className="text-gray-600 dark:text-gray-300 pt-5 bg-[#0B6477] pb-8" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2
            className="text-center text-2xl font-bold text-white dark:text-white md:text-4xl"
            data-aos="fade-up"
          >
            We have some fans.
          </h2>
        </div>

        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div
            className="aspect-auto rounded-3xl bg-gray-200 shadow-2xl shadow-gray-600/10 dark:shadow-none p-9 border-2 border-[#80ED99]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-black">Daniella Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Frequent Traveler</p>
              </div>
            </div>
            <p className="mt-8 text-black">
              I recently used the AASANI App during my trip and I must say, it was an absolute game changer! The app is so user-friendly and made my entire travel experience so much easier.
            </p>
          </div>

          <div
            className="aspect-auto rounded-3xl bg-gray-200 shadow-2xl shadow-gray-600/10 dark:shadow-none p-9 border-2 border-[#80ED99]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-black">Andy Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Client</p>
              </div>
            </div>
            <p className="mt-8 text-black">
              "The AASANI App has revolutionized the way we manage our travel bookings. It's efficient and incredibly user-friendly!"
            </p>
          </div>

          <div
            className="aspect-auto rounded-3xl bg-gray-200 shadow-2xl shadow-gray-600/10 dark:shadow-none p-9 border-2 border-[#80ED99]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-black">Yanick Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Client</p>
              </div>
            </div>
            <p className="mt-8 text-black">
              "As a client who frequently uses the AASANI App for my business travel needs, I can confidently say that this app has transformed how I organize my trips."
            </p>
          </div>

          <div
            className="aspect-auto rounded-3xl bg-gray-200 shadow-2xl shadow-gray-600/10 dark:shadow-none p-9 border-2 border-[#80ED99]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-black">Jane Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Client</p>
              </div>
            </div>
            <p className="mt-8 text-black">
              "The AASANI App made booking my travel so easy and quick! It's a must-have for anyone on the go."
            </p>
          </div>

          <div
            className="aspect-auto rounded-3xl bg-gray-200 shadow-2xl shadow-gray-600/10 dark:shadow-none p-9 border-2 border-[#80ED99]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-black">Jane Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Frequent Traveler</p>
              </div>
            </div>
            <p className="mt-8 text-black">
              "As someone who travels frequently for both work and leisure, I have tried many travel apps, but none have impressed me as much as the AASANI App!"
            </p>
          </div>

          <div
            className="aspect-auto rounded-3xl bg-gray-200 shadow-2xl shadow-gray-600/10 dark:shadow-none p-9 border-2 border-[#80ED99]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-black">Yanndy Doe</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Traveller</p>
              </div>
            </div>
            <p className="mt-8 text-black">
              "AASANI has transformed my travel experience! The app's easy navigation and comprehensive features made booking my trips smooth and enjoyable. Highly recommend it for anyone who loves to travel hassle-free!"
            </p>
          </div>
        </div>
      </div>

    </section>
    <CustomerSatisfaction/>
    <ContactUsSection/>
    </div>
  );
};

export default Testimonial;
