import React, { useState } from "react";
import HTML from "../images/html.svg";
import apiService from "../apiService";
import Logo from "../images/logo.svg"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.post("/contacts", formData);
      console.log(response.data); // Handle success response
      setFormSubmitted(true); // Set formSubmitted to true upon successful submission
      setShowModal(true); // Show the modal upon successful submission
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  const closeModal = () => {
    setShowModal(false); // Function to close the modal
    setFormSubmitted(false); // Reset the formSubmitted state
  };

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-2 p-10">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Please fill in the form below to contact our team.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none text-blue-600"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-blue-600 bg-blue-100 px-3 py-2 text-sm text-blue-600 placeholder-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none text-blue-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-blue-600 bg-blue-100 px-3 py-2 text-sm text-blue-600 placeholder-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none text-blue-600"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="flex w-full rounded-md border border-blue-600 bg-blue-100 px-3 py-2 text-sm text-blue-600 placeholder-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[100px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
            >
              Submit
            </button>
          </form>
          {showModal && ( // Render the modal if showModal is true
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white rounded-lg p-8">
                <p className="text-lg">Form submitted successfully!</p>
                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <div className=" w-full flex justify-center items-center ">
          <img
            src={Logo}
            alt="Contact Image"
            width="500"
            height="400"
            className="object-cover rounded-lg border-[2px] border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
