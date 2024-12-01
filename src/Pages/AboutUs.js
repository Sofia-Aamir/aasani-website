import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const AboutUs = () => {
  // Updated Bar chart data for Monthly Reports
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Deliveries Completed",
        data: [150, 200, 250, 300, 350, 400, 450], // Dummy data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Pending Deliveries",
        data: [20, 30, 25, 40, 35, 50, 45], // Dummy data
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Existing Line chart data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Dummy months for now
    datasets: [
      {
        label: "Resolved Reports Over Time", // Relevant to your app's content
        data: [5, 12, 8, 15, 20, 30], // Dummy data showing resolved reports
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Updated colors for consistency
        borderColor: "rgba(54, 162, 235, 1)",
        fill: true,
        tension: 0.4, // Smooth curve for the line
      },
    ],
  };
  

  // Pie chart data for user satisfaction
  const pieData = {
    labels: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied"],
    datasets: [
      {
        data: [50, 30, 15, 5],
        backgroundColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Bar chart for app usage
  const usageData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "New Users",
        data: [20, 25, 30, 50, 60, 80, 100],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Active Users",
        data: [15, 20, 25, 45, 50, 70, 90],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white">
      <header className="bg-gradient-to-r from-[#14919B] to-[#45DFB1] text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About AASANI App</h1>
      </header>

      <section className="text-center py-12 px-4">
  <h2 className="text-2xl font-bold">Our Mission & Vision</h2>
  <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
    At AASANI, our mission is to transform logistics by providing a peer-to-peer courier platform that ensures cost-effective, reliable, and sustainable delivery solutions for underserved communities. We aim to empower individuals and travelers to create a trustworthy network for transporting goods while promoting economic opportunities and reducing environmental impact.
  </p>
  <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
  <div className="transition transform hover:scale-110">
    <h3 className="text-xl font-bold">500+</h3>
    <p className="text-gray-700">Trusted Couriers</p>
  </div>
  <div className="transition transform hover:scale-110">
    <h3 className="text-xl font-bold">10+</h3>
    <p className="text-gray-700">Cities Covered</p>
  </div>
  <div className="transition transform hover:scale-110">
    <h3 className="text-xl font-bold">95%</h3>
    <p className="text-gray-700">Customer Satisfaction</p>
  </div>
  <div className="transition transform hover:scale-110">
    <h3 className="text-xl font-bold">24/7</h3>
    <p className="text-gray-700">Support Availability</p>
  </div>
</div>
</section>

<section className="bg-[#45DFB1] text-[#213A57] py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
        Our vision is to revolutionize accessibility by providing seamless, efficient, and user-friendly solutions that bridge the gap between essential services and the people who need them the most.
       </p>
    </section>

    <section className="text-center py-12 px-4">
  <h2 className="text-2xl font-bold">Our Innovative Solutions</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
    <div className="p-4 shadow-lg rounded-lg bg-[#80ED99] hover:bg-green-200 transition-colors">
      <h3 className="text-xl font-bold">Efficient Courier Services</h3>
    </div>
    <div className="p-4 shadow-lg rounded-lg bg-[#80ED99] hover:bg-green-200 transition-colors">
      <h3 className="text-xl font-bold">Reliable Parcel Tracking</h3>
    </div>
    <div className="p-4 shadow-lg rounded-lg bg-[#80ED99] hover:bg-green-200 transition-colors">
      <h3 className="text-xl font-bold">Cost-Effective Solutions</h3>
    </div>
    <div className="p-4 shadow-lg rounded-lg bg-[#80ED99] hover:bg-green-200 transition-colors">
      <h3 className="text-xl font-bold">Nationwide Coverage</h3>
    </div>
  </div>
</section>

      {/* Graphs Section */}
      <section className="py-8 px-4 bg-[#0B6477]">
  {/* First Section for Monthly Reports and Resolved Reports */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white shadow-lg rounded-lg p-4 border-2 border-[#80ED99]">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Monthly Reports
      </h3>
      <Bar data={barData} />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-4 border-2 border-[#80ED99]">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Resolved Reports
      </h3>
      <Line data={lineData} />
    </div>
  </div>

  {/* Second Section for User Satisfaction and App Usage Over Months */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  <div className="bg-white shadow-lg rounded-lg p-4 border-2 border-[#80ED99]">
  <h3 className="text-lg font-bold text-gray-800 mb-4">
    User Satisfaction
  </h3>
  <div className="chart-container" style={{ position: 'relative', height: '300px' }}>
    <Pie 
      data={pieData} 
      options={{
        responsive: true,
        maintainAspectRatio: false, // Allow resizing without maintaining aspect ratio
      }}
    />
  </div>
</div>
    <div className="bg-white shadow-lg rounded-lg p-4 border-2 border-[#80ED99]">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        App Usage Over Months
      </h3>
      <Bar data={usageData} />
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
