import React from "react";
import Milk from "../images/milk.svg";
import HTML from "../images/html.svg";
import CSS from "../images/css.svg";
import JS from "../images/js.svg";
import Reactsvg from "../images/react.svg";
import PHP from "../images/php.svg";

function Title() {
  return (
    <div class="w-auto h-auto">
      <div class="flex justify-center items-center text-3xl font-bold mt-10">
        <span>----------</span>
        <span>Stacks</span>
        <span>----------</span>
      </div>
      <div class="flex justify-center font-bold text-5xl text-[#000120]">
        My Power
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
        <div class="flex flex-col rounded-[40px] sm:rounded-[20px] lg:rounded-[30px] bg-black items-center justify-center">
          <div class="aspect-w-16 aspect-h-9 ">
            <img className=" w-full h-[90%] " src={HTML} alt="" srcset="" />
          </div>
          <div class="flex justify-center text-3xl font-bold text-white">
            HTML
          </div>
          <p class="text-white mt-5 w-[83%] text-center font-bold">
            Hyper Text Markup Language is the standard markup language for
            creating web pages. I have a strong foundation in HTML.
          </p>
        </div>
        <div class="flex flex-col rounded-[40px] sm:rounded-[20px] lg:rounded-[30px] bg-black items-center justify-center">
          <div class="aspect-w-16 aspect-h-9 rounded-t-3xl">
            <img className=" w-full h-[90%]" src={CSS} alt="" srcset="" />
          </div>
          <div class="flex justify-center text-3xl font-bold text-white">
            CSS
          </div>
          <p class="text-white mt-5 w-[83%] text-center font-bold">
            Cascading Style Sheet is used to describe how HTML elements are
            displayed. In addition to understanding basic CSS syntax and
            properties, I am also familiar with preprocessors.
          </p>
        </div>
        <div class="flex flex-col rounded-[40px] sm:rounded-[20px] lg:rounded-[30px] bg-black items-center justify-center">
          <div class="aspect-w-16 aspect-h-9 rounded-t-3xl">
            <img
              className="w-full h-[90%] rounded-[40px] p-5"
              src={JS}
              alt=""
              srcset=""
            />
          </div>
          <div class="flex justify-center text-3xl font-bold text-white">
            JavaScript 
          </div>
          <p class="text-white mt-5 w-[83%] text-center font-bold">
            JavaScript is primarily used to create interactive effects for websites. I'm comfortable writing vanilla JS
           Aside from HTML &amp; CSS, I can write JavaScript code to make my websites interactive.
          </p>
        </div>
        <div class="flex flex-col rounded-[40px] sm:rounded-[20px] lg:rounded-[30px] bg-black items-center justify-center">
          <div class="aspect-w-16 aspect-h-9 ">
            <img
              className=" w-full h-[90%] rounded-[40px] p-5"
              src={Reactsvg}
              alt=""
              srcset=""
            />
          </div>
          <div class="flex justify-center text-3xl font-bold text-white">
            React
          </div>
          <p class="text-white mt-5 w-[83%] text-center font-bold">
            React is a popular open source front-end library for building user interfaces. It's fast, flexible
            I have experience in building user interfaces using the React library for building user interfaces. 
          </p>
        </div>
        <div class="flex flex-col rounded-[40px] sm:rounded-[20px] lg:rounded-[30px] bg-black items-center justify-center">
          <div class="aspect-w-16 aspect-h-9 rounded-t-3xl">
            <img
              className=" w-full h-[90%] rounded-2xl"
              src={PHP}
              alt=""
              srcset=""
            />
          </div>
          <div class="flex justify-center text-3xl font-bold text-white">
            PHP
          </div>
          <p class="text-white mt-5 w-[83%] text-center font-bold">
            PHP is a server-side scripting language designed for web development but also used as a general-pur
            I have experience with back end development using the PHP language and framework such as Laravel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;
