import React from "react";

const CustomerSatisfaction = () => {
  // Dummy data for customer satisfaction levels with descriptions
  const satisfactionData = [
    { 
      percentage: 60, 
      emoji: "😞", 
      color: "bg-red-500", 
      label: "Low", 
      description: "Customer satisfaction is below expectations."
    },
    { 
      percentage: 80, 
      emoji: "😊", 
      color: "bg-yellow-400", 
      label: "Average", 
      description: "Satisfaction is generally good, but there is room for improvement."
    },
    { 
      percentage: 90, 
      emoji: "😄", 
      color: "bg-green-500", 
      label: "Good", 
      description: "High satisfaction level, customers are happy with the service."
    },
    { 
      percentage: 75, 
      emoji: "😐", 
      color: "bg-orange-400", 
      label: "Below Average", 
      description: "Satisfaction is below average, customers are not fully content."
    },
    { 
      percentage: 85, 
      emoji: "🙂", 
      color: "bg-yellow-500", 
      label: "Above Average", 
      description: "Customers are satisfied, with minor areas of improvement."
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h3 className="text-center text-2xl font-bold text-black">Customer Satisfaction</h3>
        <div className="flex justify-center space-x-8 mt-8">
          {satisfactionData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full border-8 ${item.color} flex items-center justify-center`}>
                    <span className="text-2xl text-white">{item.emoji}</span>
                  </div>
                </div>
                <svg
                  className="absolute top-0 left-0 transform -rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 36 36"
                  strokeWidth="3"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    stroke="#e6e6e6"
                    fill="none"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    stroke={item.color}
                    strokeDasharray={`${item.percentage} 100`}
                    fill="none"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <span className="text-[#0B6477] text-lg">{item.percentage}%</span>
                <p className="text-[#0B6477] text-sm">{item.label} Satisfaction</p>
                <p className="text-black text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfaction;
