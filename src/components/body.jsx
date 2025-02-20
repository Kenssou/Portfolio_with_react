"use client";
import resume from "../../public/images/SEGUN KENSSOU RESUME .pdf";
import Contact from "./contact.Jsx";
import Footer from "./footer";

import Project from "./project";
import TechStack from "./techstack";
// import React from "react";

export default function Body() {
  return (
    <div className="dark:bg-slate-900 w-[100%] ">
      <div className="lg:pt-[200px] xl:pt-[200px]  md:pt-[250px] pt-[100px] lg:max-w-[1024px] xl:max-w-[1150px] m-auto flex flex-col lg:flex-row  md:m-auto md:flex md:flex-row">
        <div className="lg:w-[500px] xl:w-[700px] m-auto dark:text-[white] lg:ml-[100px] xl:ml-[0px]">
          <h1 className="font-bold lg:text-[40px] xl:text-[50px] text-[30px]">
            Hi 👋, <br />
            My name is <br />
            <span className="font-bold lg:text-[58px] bg-gradient-to-bl from-purple-500 to-indigo-800 bg-clip-text text-transparent leading-normal">
              Segun Kenssou
            </span>
            <br />
            Your trusted Frontend <br />
            Developer.
          </h1>

          <button
            onClick={() => {
              window.open(resume);
            }}
            target="_blank"
            className="lg:w-[200px] xl:w-[250px] w-[150px] lg:h-[50px] h-[40px] lg:mt-[50px] mt-[20px] rounded-[10px] bg-[purple] ml-[0px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white lg:text-[16px] font-bold"
          >
            View Cv
          </button>
        </div>

        <div className="lg:h-[310px] xl:h-[350px] md:h-[250px] h-[300px] xl:w-[350px] lg:w-[310px] md:w-[250px] w-[300px] rounded-[100%] bg-[purple] lg:ml-[00px] lg:mt-[70px] md:mt-[30px] m-auto mt-[80px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <img
            className="lg:h-[300px] xl:h-[340px] md:h-[240px] h-[290px] lg:w-[300px] xl:w-[340px] md:w-[240px] w-[290px] rounded-[100%] m-auto mt-[5px]"
            src="images/IMG_9862.jpg"
            alt=""
          />
        </div>
      </div>
      {/* about sections */}
      <div
        className="lg:mt-[150px] md:mt-[250px] mt-[200px] m-auto flex flex-col"
        id="about"
      >
        <h1 className="lg:text-[25px] xl:text-[25px] text-[20px] font-bold m-auto bg-gradient-to-bl from-purple-500 to-indigo-800 bg-clip-text text-transparent leading-normal">
          About Me
        </h1>
        <h2 className="lg:text-[20px] xl:text-[25px] text-[15px] dark:text-[white] font-medium m-auto">
          Get to know me more
        </h2>
        <div className="lg:text-[20px] xl:text-[20px] text-[15px] text-slate-900 dark:text-slate-300 font-regular lg:max-w-[900px] xl:max-w-[1150px] md:max-w-[670px] max-w-[350px] m-auto mt-[40px] text-justify">
          <div className="max-w-[500px] bg-[white] p-10 rounded-[30px] text-black shadow-2xl">
            I am a passionate front-end developer with a strong background in
            building responsive, user-friendly websites and web applications.
            With expertise in HTML, CSS, JavaScript, and popular frameworks like
            React, I focus on creating interactive and visually appealing user
            interfaces.
          </div>

          <div className="max-w-[500px] bg-[white] p-10 rounded-[30px] text-black shadow-2xl md:ml-[0px] ml-[0px] mt-[30px]">
            My goal is to bridge the gap between design and development by
            writing clean, efficient, and scalable code that enhances the user
            experience. I thrive in dynamic environments, enjoy problem-solving,
            and am always eager to learn new technologies to stay on top of the
            ever-evolving landscape of front-end development.
          </div>
          <div className="max-w-[500px] bg-[white] p-10 rounded-[30px] text-black shadow-2xl mt-[30px]">
            When I’m not coding, you’ll find me exploring new design trends,
            contributing to open-source projects, or tinkering with personal web
            projects to experiment with the latest front-end tools.
          </div>
        </div>
      </div>
      {/* about sections */}
      {/* tech stack */}
      <div id="stack">
        <div className="lg:mt-[150px] md:mt-[250px] mt-[200px] lg:max-w-[1024px] m-auto flex flex-col">
          <h1 className="lg:text-[25px] xl:text-[25px] text-[20px] font-bold m-auto bg-gradient-to-bl from-purple-500 to-indigo-800 bg-clip-text text-transparent leading-normal">
            My Tech Stack
          </h1>
          <h2 className="lg:text-[20px] xl:text-[30px] text-[15px] dark:text-[white] font-medium m-auto">
            Technologies I’ve been working with recently
          </h2>
        </div>
        <TechStack />
      </div>
      {/* tech stack */}
      <div>
        <Project />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
