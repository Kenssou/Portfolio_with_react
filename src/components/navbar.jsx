"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  // const [count, setCount] = useState(0);

  return (
    <main>
      {/* navBAr for md , lg and xl screen */}
      <div className="hidden lg:flex lg:h-[70px] xl:h-[90px] md:flex md:h-[70px] m-auto  fixed w-full top-0 left-0 justify-evenly shadow-md bg-[white] z-10">
        <a href="/">
          <div className="mt-[35px] md:mt-[25px] xl:mt-[40px]">
            <h2 className="font-bold text-purple-700 text-[18px]">
              KENSU &lt;/&gt;
            </h2>
          </div>
        </a>
        <div className="lg:mt-[30x] md:mt-[25px] xl:mt-[40px] lg:space-x-[40px] xl:space-x-[60px] md:space-x-[30px]  font-medium lg:text-[18px] xl:text-[18px] text-black">
          <a href="#" className="header">
            Home
          </a>
          <a href="#about" className="header">
            About
          </a>
          <a href="#stack" className="header">
            Tech Stack
          </a>
          <a href="#project" className="header">
            Project
          </a>
          <a href="#contact" className="header">
            Contact
          </a>
        </div>
        <div className="social lg:mt-[25px] xl:mt-[37px] md:mt-[25px] lg:space-x-[20px] md:space-x-[10px] xl:space-x-[30px] text-[black] text-[25px] md:text-[18px] xl:text-[20px] flex ">
          <a href="https://github.com/Kenssou" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/segun-kenssou-ab8460151/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/kenssou/ " target="_blank">
            <FaSquareInstagram />
          </a>
        </div>
      </div>
      {/* navBAr for md , lg and xl screen  */}
      {/*navbar for mobile */}
      <div>
        {" "}
        <a href="index.html">
          <div className="mt-[35px] ml-[30px] lg:hidden md:hidden xl:hidden">
            <h2 className="font-bold text-purple-700 text-[18px]">
              KENSU &lt;/&gt;
            </h2>
          </div>
        </a>
      </div>

      <div
        className="lg:hidden md:hidden xl:hidden mt-[35px] top-0 right-10 absolute"
        id="sideBarBtn"
      >
        <GiHamburgerMenu />
      </div>
      <div
        className="hidden h-[100vh] lg:h-[0]  flex-col fixed w-[250px] top-0 right-0 justify-normal space-y-[30px] shadow-md backdrop-blur-3xl dark:shadow-md  z-[999]"
        id="sideBar"
      >
        <div className="mt-[50px] ml-[10px]" id="closeBtn">
          {/* <svg
            class="dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="26px"
            viewBox="0 -960 960 960"
            width="26px"
            fill="black"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg> */}
        </div>

        <div className="ml-[50px] min-w-[0] mt-[0] space-y-[30px] font-medium text-[15px] text-black dark:text-[white] flex flex-col header">
          <a href="#" className="">
            Home
          </a>
          <a href="#about" className="">
            About
          </a>
          <a href="#stack" className="">
            Tech Stack
          </a>
          <a href="#project" className="">
            Project
          </a>
          <a href="#contact" className="">
            Contact
          </a>
        </div>

        <div className="social ml-[50px] mt-[] space-x-[20px] text-[black] dark:text-[white] text-[20px]">
          <a href="https://github.com/Kenssou" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/segun-kenssou-ab8460151/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/kenssou/ " target="_blank">
            <FaSquareInstagram />
          </a>
        </div>
      </div>

      {/*navbar for mobile */}
    </main>
  );
}
