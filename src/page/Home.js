import React from 'react';
import logo_img from "../assets/image.jpg"; // Import your image

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center text-center p-4"> {/* Set background color and full-screen height */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-4 bg-red-500">Your Resume in Three Easy Steps</h1> {/* Title */}
      <p className="text-xl text-gray-600 mb-6">Build a professional resume with ease. Choose a template, add your details, and download your resume.</p> {/* Description */}
      <img src={logo_img} alt="Logo" className="mb-6 w-48 h-48 rounded-full shadow-lg" /> {/* Image with styling */}
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Select Template</button> {/* Button */}
    </div>
  );
};

export default Home;