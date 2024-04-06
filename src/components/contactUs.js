import React, { useEffect, useRef } from "react"

const ContactUs = () => {
  return (
    <div className="bg h-screen w-screen flex flex-row">
      <div className="flex h-full w-[70%] flex-col items-center justify-center bg-[#000120] text-white">
        <div className="mb-6 h-auto w-80">
          <h1 className="text-3xl">Still have questions? Write to us below.</h1>
        </div>
        <p className="h-auto w-80">
          Please feel free to reach out to us using the form below.
        </p>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className=" w-96 rounded-3xl bg-gradient-to-r text-white from-blue-800 to-indigo-800">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">
              Contact Us
            </h1>
            <form action="#" method="POST" className="max-w-md">
              <div className="mb-4">
                <label for="name" className="block font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                ></input>
              </div>
              <div className="mb-4">
                <label for="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                ></input>
              </div>
              <div className="mb-6">
                <label for="message" className="block font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
