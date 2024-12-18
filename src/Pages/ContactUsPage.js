import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaShippingFast} from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <div className="bg-[#0B6477]">
    <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-[#0B6477] rounded-lg py-6">
      <div className="grid lg:grid-cols-3 items-center">
        {/* Contact Information Section */}
        <div className="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <FaMapMarkerAlt className="w-7 h-7 text-[#073235]" />
            <h4 className="text-gray-800 text-base font-bold mt-4">Our Location</h4>
            <p className="text-sm text-gray-600 mt-2">Available Online Only</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <FaPhoneAlt className="w-7 h-7 text-[#073235]" />
            <h4 className="text-gray-800 text-base font-bold mt-4">Call Us</h4>
            <p className="text-sm text-gray-600 mt-2">+158 996 888</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            <FaRegEnvelope className="w-7 h-7 text-[#073235]" />
            <h4 className="text-gray-800 text-base font-bold mt-4">Chat to Us</h4>
            <p className="text-sm text-gray-600 mt-2">info@example.com</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
  <FaShippingFast className="w-7 h-7 text-[#073235]" />
  <h4 className="text-gray-800 text-base font-bold mt-4">About AASANI App</h4>
  <p className="text-sm text-gray-600 mt-2">Your go-to app for simplified solutions and seamless service connections.</p>
</div>

        </div>

        {/* Contact Form Section */}
        <div className="lg:col-span-2 bg-[#073235] rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
          <h2 className="text-3xl text-white text-center font-bold mb-6">Contact Us</h2>
          <form>
            <div className="max-w-md mx-auto space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
              />
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"
              ></textarea>
              <button
                type="button"
                className="text-gray-800 w-full relative bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg text-sm px-6 py-3 !mt-6"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsPage;
