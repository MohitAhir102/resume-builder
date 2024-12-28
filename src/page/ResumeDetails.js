import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    workProfile: "",
    address: "",
    phone: "",
    email: "",
    technicalSkills: "",
    education: "",
    projects: "",
    workExperience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col md:flex-row p-6">
      <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Personal Details</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Your Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Work Profile</label>
          <input
            type="text"
            name="workProfile"
            value={formData.workProfile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Technical Skills</label>
          <input
            type="text"
            name="technicalSkills"
            value={formData.technicalSkills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Education</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Projects</label>
          <textarea
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Work Experience</label>
          <textarea
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      <div className="w-full md:w-2/3 p-6">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h1 className="text-2xl font-bold">{formData.name || "Your Name"}</h1>
          <p className="italic mb-4">{formData.workProfile || "Work Profile"}</p>
          <p className="mb-4">{formData.summary || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>

          <div className="mb-4">
            <h2 className="font-bold text-lg">Contact</h2>
            <p>Phone: {formData.phone || "Phone Number"}</p>
            <p>Email: {formData.email || "Email Address"}</p>
            <p>Address: {formData.address || "Address Line"}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-bold text-lg">Skills</h2>
            <p>{formData.technicalSkills || "YOUR SKILLS ARE SHOWN HERE"}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-bold text-lg">Education</h2>
            <p>{formData.education || "Education Details"}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-bold text-lg">Projects</h2>
            <p>{formData.projects || "Project Details"}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-bold text-lg">Work Experience</h2>
            <p>{formData.workExperience || "Work Experience Details"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

