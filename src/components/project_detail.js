// Project_details.js

import React, { useEffect, useState } from "react";
import Capture from "../images/capture1.png";


function Project_details() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []); // Initialize the slider when the component mounts

  const goToNextSlide = () => {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="text-black bg-[#000120] w-screen h-screen overflow-hidden relative">
      <div className="slider-wrapper flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="slide">
        <div className="card">
            <div className="card__img" id="img01"></div>
            <div className="card__content">
              <p className="card__content-theme">Project 01</p>
              <h2 className="card__content-header">Portfolio Website</h2>
              <p className="card__content-paragraph">
                Portfolio website created using HTML, CSS and  JavaScript to showcase my projects. It includes a brief introduction about me nad my skills.
              </p>
              <a href="#" className="card__content-link">
                Read
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
        <div className="card">
            <div className="card__img" id="img02"></div>
            <div className="card__content">
              <p className="card__content-theme">Project 02</p>
              <h2 className=" text-[54px] font-extrabold capitalize">Emergency Application</h2>
              <p className="card__content-paragraph">
                The application was built in Android Java. Used to report crime in near by areas and alert nearby users of emergencies.
              </p>
              <a href="#" className="card__content-link">
                Read
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
        <div className="card">
            <div className="card__img" id="img03"></div>
            <div className="card__content">
              <p className="card__content-theme">Project 03</p>
              <h2 className="card__content-header">E-commerce</h2>
              <p className="card__content-paragraph">
                E-commerce website for local vendors to give them growth and increase their sales.
              </p>
              <a href="#" className="card__content-link">
                Read
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="prevnext absolute bottom-0 left-0 right-0 flex flex-row justify-center gap-4 pt-36">
        <button id="prev" className="prevnext" onClick={goToPreviousSlide}>
        </button>
        <button id="next" className="next" onClick={goToNextSlide}>
        </button>
      </div>
    </div>
  );
}

export default Project_details;
