import React from "react";
import Tracksvg from "../images/track.svg";

function Story() {
  return (
    <div className="h-[40%] w-screen bg-[#000120] text-white">
      <div className="">
        <span className=" font-bold text-xl flex items-center justify-center ">
          ---OurStory--
        </span>
        <span className=" flex font-bold items-center justify-center text-2xl ">
          Lorem ipsum Dummy Text
        </span>
      </div>
      <div className=" pt-10 pl-10 flex gap-8 ">
        <div className=" self-start">
        <img src={Tracksvg} alt="" />
        <span className=" font-bold text-2xl">2020</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, modi! Dicta quidem sunt iusto temporibus facilis odit.</p>
        </div>
        <div className="self-start">
        <img src={Tracksvg} alt="" />
        <span className=" font-bold text-2xl">2021</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, modi! Dicta quidem sunt iusto temporibus facilis odit.</p>
        </div>
        <div className="self-start">
        <img src={Tracksvg} alt="" />
        <span className=" font-bold text-2xl">2022</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, modi! Dicta quidem sunt iusto temporibus facilis odit.</p>
        </div>
        <div className="self-start">
        <img src={Tracksvg} alt="" />
        <span className=" font-bold text-2xl">2023</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, modi! Dicta quidem sunt iusto temporibus facilis odit.</p>
        </div>
      </div>
    </div>
  );
}

export default Story;
