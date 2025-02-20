"use client";

import newWord from "../../public/images/newWordwiz.png";
import Wordwiz from "../../public/images/wordwiz.png";
import portfolio from "../../public/images/portfolio.png";

export default function ProjectCard() {
  const job = [
    {
      picture: newWord,
      title: "Word Wiz",
      note: "  Word Wiz is an educational game that makes spelling interactive for all ages. With speech synthesis and recognition, players hear, spell, and master words in an audio-rich environment.",
      stack: "Tech stack: Tailwind Css, Next Js",
      href: "/",
      link: "live preview on request",
    },
    {
      picture: Wordwiz,
      title: "Word Wiz",
      note: "  Word Wiz is an educational game that makes spelling interactive for all ages. With speech synthesis and recognition, players hear, spell, and master words in an audio-rich environment.",
      stack: "Tech stack: HTML, CSS, JavaScript",
      href: "https://word-wiz-fe.vercel.app/",
      link: "Live Preview",
    },
    {
      picture: portfolio,
      title: "Personal Portfolio",
      note: "I am a passionate front-end developer with a strong background in building responsive, user-friendly websites and web applications. With expertise in HTML, CSS, JavaScript, and popular frameworks like React.",
      stack: "Tech stack: Tailwind, React Js",
      href: "https://kensu.vercel.app/",
      link: "Live Preview",
    },
  ];

  return (
    <div className="mt-[50px] grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {job.map((jobItem, index) => (
        <div
          key={index}
          className="h-[560px] bg-[white] dark:bg-slate-600 shadow-md shadow-gray-500 dark:shadow-slate-600 rounded-[20px]"
        >
          <div>
            <img className="rounded-t-[20px]" src={jobItem.picture} alt="" />
          </div>
          <h1 className="w-[80%] mt-[20px] m-auto font-bold dark:text-slate-200">
            {jobItem.title}
          </h1>
          <h2 className="text-justify w-[80%] m-auto mt-[10px] dark:text-slate-300 text-slate-700 h-[170px]">
            {jobItem.note}
          </h2>
          <h2 className="w-[80%] m-auto mt-[10px] dark:text-slate-300 text-slate-700">
            {jobItem.stack}
          </h2>
          <div className="w-[80%] m-auto mt-[20px]">
            <div className="flex gap-2">
              <svg
                className="dark:fill-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
              <a
                href={jobItem.href}
                target="_blank"
                rel="noreferrer"
                className="dark:text-slate-100 underline underline-offset-4"
              >
                {jobItem.link}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
