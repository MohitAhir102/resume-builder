import React from "react";
import Resume_1 from "../assets/Resume_1.webp";
import Resume_2 from "../assets/Resume_2.jpg";
import Resume_3 from "../assets/Resume_3.avif";
import Resume_4 from "../assets/Resume_4.webp";
import Resume_5 from "../assets/Resume_5.jpg";

const SelectTemplate = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold">Select a template from our collection</h1>
      </div>

      {/* First row of images */}
      <div className="grid grid-cols-3 gap-4">
        <img
          src={Resume_1}
          alt="Resume 1"
          className="w-48 h-64 mx-auto rounded-lg shadow-lg object-cover"
        />
        <img
          src={Resume_2}
          alt="Resume 2"
          className="w-48 h-64 mx-auto rounded-lg shadow-lg object-cover"
        />
        <img
          src={Resume_3}
          alt="Resume 3"
          className="w-48 h-64 mx-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Second row of images */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img
          src={Resume_4}
          alt="Resume 4"
          className="w-48 h-64 mx-auto rounded-lg shadow-lg object-cover"
        />
        <img
          src={Resume_5}
          alt="Resume 5"
          className="w-48 h-64 mx-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Add step navigation or next button */}
      <div className="text-center mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectTemplate;
