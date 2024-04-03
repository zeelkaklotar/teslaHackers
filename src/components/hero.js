import React, { useEffect, useState } from "react";
import HeroImage from "../images/hero.png";
import "../styles/heroSection.css"; // Import CSS file for animation styles

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = ["Hi, My name is Zeel", "and I am a web developer"];
  const typingSpeed = 100; // Adjust typing speed (milliseconds per character)
  const textChangeSpeed = 2000; // Adjust speed between changing texts (milliseconds)

  useEffect(() => {
    let currentTextIndex = 0;
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < textToType[currentTextIndex].length) {
        setTypedText(prevText => prevText + textToType[currentTextIndex].charAt(charIndex));
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => {
          setTypedText("");
          charIndex = 0;
          currentTextIndex = (currentTextIndex + 1) % textToType.length;
          setTimeout(typeText, typingSpeed);
        }, textChangeSpeed);
      }
    };

    typeText();

    // Cleanup function to clear any remaining timers
    return () => clearTimeout();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center text-white">
        <div className="p-8">
          <h1 className="text-4xl font-bold">{typedText}</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full bg-no-repeat bg-center" style={{backgroundImage: `url(${HeroImage})`}}></div>
    </div>
  );
};

export default HeroSection;
