import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const ContactUsSection = () => {
  return (
    <section className="bg-[#80ED99] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black">Get in Touch</h3>
          <p className="text-lg text-black mt-4">
            We would love to hear from you! Feel free to reach out to us with any inquiries, suggestions, or feedback.
          </p>
          <div className="mt-8">
            <Link
              to="/contact-us" // Link to the Contact Us page
              className="bg-[#0B6477] text-xl text-white py-4 px-8 rounded-full hover:bg-[#065e74] transition duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-12 text-center text-black">
            <h4 className="text-lg font-semibold text-black">Why Choose Us?</h4>
            <p className="mt-4">
              We offer top-notch customer service and are always ready to assist you with your needs. Our team
              is dedicated to providing the best experience possible, making sure all your questions are answered promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
