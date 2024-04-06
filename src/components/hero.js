import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed library
import HeroImage from "../images/hero.png";
import "../styles/heroSection.css"; // Import CSS file for animation styles
import MyFile from "../Zeel.pdf"; // Import your file

const HeroSection = () => {
  // Create a ref for the first element
  const typedElementRef2 = useRef(null); // Create a ref for the second element

  useEffect(() => {
    const typed2 = new Typed(typedElementRef2.current, {
      strings: ["and I am a web developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false, // Disable looping
      showCursor: false, // Hide cursor
    });

    return () => {
      // Cleanup Typed instance when component unmounts
      typed2.destroy(); // Cleanup Typed instance when component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center text-white">
        <div className="   w-full ml-40">
          {/* First line */}
          <h1 className="text-4xl font-bold">Hi, My name is Zeel</h1>
          {/* New line */}
          <div style={{ height: "20px" }}></div>
          {/* Second line */}
          <div>
            <h1 className="text-4xl font-bold" ref={typedElementRef2}></h1>
            {/* Download button */}
            <a
              href={MyFile}
              download="Resume"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              style={{ textDecoration: "none" }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 h-full bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
    </div>
  );
};

export default HeroSection;
