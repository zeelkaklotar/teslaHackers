import React, { useState } from "react";
import HTML from "../images/html.svg";
import apiService from "../apiService";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.post('/contacts', formData);
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error); // Handle error
    }
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
          <form onSubmit={handleSubmit}> {/* Form starts here */}
            <div className="space-y-2">
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
                  className="flex h-10 w-full rounded-md border border-blue-600 bg-blue-100 px-3 py-2 text-sm text-blue-600 placeholder-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  onChange={handleChange}
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
                  className="flex h-10 w-full rounded-md border border-blue-600 bg-blue-100 px-3 py-2 text-sm text-blue-600 placeholder-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  onChange={handleChange}
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
                  className="flex w-full rounded-md border border-blue-600 bg-blue-100 px-3 py-2 text-sm text-blue-600 placeholder-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[100px]"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
              >
                Submit
              </button>
            </div>
          </form> {/* Form ends here */}
        </div>
        <div className=" w-full flex justify-center items-center ">
          <img
            src={HTML}
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
