import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="social mt-[50px] w-[100px] space-x-[30px] text-[black] text-[25px] dark:text-[white] flex flex-row  m-auto pb-[50px]">
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
  );
}
