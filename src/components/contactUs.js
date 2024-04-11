import React from "react";
import Mail from "../images/mail_round.svg";
import Phone from "../images/phone_round.svg";

const ContactUs = () => {
  return (
    <div class="flex flex-col md:flex-row items-center justify-center h-screen bg-[#000120]">
  <div class="flex flex-col md:flex-row sm:flex-col h-full w-[90%] md:w-[80%] lg:w-[70%] lg:h-[90%] rounded-3xl bg-white">
    <div class="flex flex-col justify-center rounded-2xl gap-4 h-full w-full lg:rounded-e-full bg-[#001439] text-white md:w-[40%]">
      <h1 class="ml-5 text-2xl">Contact Information</h1>
      <p class="ml-6 w-full md:w-52">
        Fill out the form and our team will get in touch.
      </p>
      <div class="ml-5 flex flex-row justify-start gap-2">
        <div class="w-7">
          <img src={Mail} alt="" />
        </div>
        <p class="text-l">zeelkaklotar@gmail.com</p>
      </div>
      <div class="ml-5 flex flex-row justify-start gap-2">
        <div class="w-7">
          <img src={Phone} alt="" />
        </div>
        <p class="text-l">8758969111</p>
      </div>
    </div>
    <div class="flex flex-col gap-24 mt-10 p-6 h-full  w-full md:w-[60%]">
      <div class="flex flex-col-reverse ">
        <input placeholder="User name" class="border-b-2 border-black outline-none focus:border-blue-500 " />
      </div>
      <div class="flex flex-col-reverse">
        <input placeholder="Mail" class="border-b-2 border-black outline-none focus:border-blue-500" />
      </div>
      <div class="flex flex-col-reverse ">
        <input placeholder="Phone" class="border-b-2 border-black outline-none focus:border-blue-500" />
      </div>
      <div class="flex flex-col-reverse ">
        <textarea placeholder="Message" class="border-b-2 border-black outline-none focus:border-blue-500" />
      </div>
      <div class="flex flex-col-reverse bg-blue-900 py-2 rounded-xl text-white hover:bg-blue-500">
        <button type="submit" class="button-style">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactUs;