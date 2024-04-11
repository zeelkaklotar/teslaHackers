import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import HeroImage from "../images/hero.png";
import MyFile from "../Zeel.pdf";

const HeroSection = () => {
  const typedElementRef2 = useRef(null);

  useEffect(() => {
    const typed2 = new Typed(typedElementRef2.current, {
      strings: ["and I am a web developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed2.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white p-10 md:p-20">
        <h1 className="text-4xl font-bold">Hi, My name is Zeel</h1>
        <div className="h-4"></div>
        <h1 className="text-4xl font-bold" ref={typedElementRef2}></h1>
        <div className="mt-4">
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
      <div
        className=" md:self-center flex-1 bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${HeroImage})`, height: "50vh" }}
      ></div>
    </div>
  );
};

export default HeroSection;
