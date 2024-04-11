// Project_details.js

import React, { useEffect, useState } from "react";


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
              <p className="card__content-theme">Travel</p>
              <h2 className="card__content-header">Misty mountain</h2>
              <p className="card__content-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                porro, tempora consequuntur vel dolore assumenda aspernatur cum
                dignissimos unde reprehenderit sint? Neque, id consequuntur.
                Quibusdam sit officiis debitis corrupti. Quasi.
              </p>
              <a href="#" className="card__content-link">
                Read
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
        <div className="card">
            <div className="card__img" id="img01"></div>
            <div className="card__content">
              <p className="card__content-theme">Travel</p>
              <h2 className="card__content-header">Misty mountain</h2>
              <p className="card__content-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                porro, tempora consequuntur vel dolore assumenda aspernatur cum
                dignissimos unde reprehenderit sint? Neque, id consequuntur.
                Quibusdam sit officiis debitis corrupti. Quasi.
              </p>
              <a href="#" className="card__content-link">
                Read
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
        <div className="card">
            <div className="card__img" id="img01"></div>
            <div className="card__content">
              <p className="card__content-theme">Travel</p>
              <h2 className="card__content-header">Misty mountain</h2>
              <p className="card__content-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                porro, tempora consequuntur vel dolore assumenda aspernatur cum
                dignissimos unde reprehenderit sint? Neque, id consequuntur.
                Quibusdam sit officiis debitis corrupti. Quasi.
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
