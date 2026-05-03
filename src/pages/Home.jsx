import {
  FaCode,
  FaCss3,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import img from "../img/1.png";
import { BiSend } from "react-icons/bi";
import {
  SiNestjs,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitess,
  SiVitest,
} from "react-icons/si";
import Typing from "../data/Typed";
import { RiNextjsFill } from "react-icons/ri";
import { Send } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import "./home.css";
import { CgVercel } from "react-icons/cg";

export default function Home() {
  return (
    <section
      id="home"
      className=" scroll-mt-5 min-h-screen bg-zinc-950 pt-20 text-white">
      <div className="w-[90%] mx-[auto] grid gap-5 lg:grid md:grid-cols-2 lg:grid-cols-2 gap-10 min-h-[500px] relative">
        {/* left */}
        <div className="mih-h-[500px] px-2 flex flex-col gap-4 justify-center z-10 ">
          <div className=" ">
            <h1 className="text-6xl  font-light dark:text-gray-200">I am</h1>
            <h1 className="text-6xl lg:text-6xl font-bold  dark:text-gray-100 ">
              Ilyas samsudin
            </h1>
            <h1 className="text-3xl text-sky-500 mt-3">
              {/* <Typing /> */}
              Front End Developer
            </h1>
          </div>
          <p className="text-sm lg:text-base">
            I am a self-taught beginner front-end developer focused on building
            modern, responsive, and user-friendly websites using React and
            Tailwind CSS, transforming designs from Figma into interactive web
            interfaces.
          </p>
          <div className="mt-2 flex gap-2">
            <a
              href="#contact"
              className="px-5 py-2 rounded-2xl bg-sky-600 text-white shadow-lg">
              Contact Me
            </a>
            <a
              href="#project"
              className="px-5 py-2 rounded-2xl border border-blue-500 text-sky-500 shadow-lg">
              View Project
            </a>
          </div>
        </div>

        {/* right */}
        <div className="boxFoto h-[283px] lg:h-[400px] rounded-l-3xl relative  ">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-[-1]  top-[-10%]  lg:right-[10%]  lg:left-[10%] ">
            <path
              fill="#0ea5e9"
              d="M41,-63.9C54.1,-55.4,66.2,-45.6,70.4,-33.1C74.7,-20.6,70.9,-5.5,69.4,10.5C67.8,26.4,68.5,43.1,61.2,54.9C53.9,66.7,38.8,73.5,23.9,74.9C9.1,76.3,-5.5,72.2,-15.7,64.3C-25.9,56.4,-31.9,44.6,-43.8,35.4C-55.7,26.2,-73.5,19.7,-79,8.8C-84.5,-2,-77.7,-17.2,-68.2,-28.4C-58.8,-39.5,-46.7,-46.7,-34.9,-55.7C-23.1,-64.7,-11.5,-75.5,1.2,-77.4C14,-79.3,28,-72.3,41,-63.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <img src={img} alt="" className="h-full w-full object-contain" />
          <VscVscode
            className="absolute text-blue-500 left-[10%] lg:left-[22%] bottom-[20%] bg-slate-950 p-2 rounded-lg shadow-lg "
            size={40}
          />
          <SiVitess
            className="absolute text-purple-500 right-[12%] lg:right-[20%] bottom-[20%] bg-slate-950 p-2 rounded-lg shadow-lg "
            size={40}
          />
        </div>

        {/* right */}

        {/* <div
          className="p-5 mt-20 md:p-10 bg-gradient-to-b from-slate-800 to-black rounded-3xl  z-10"
          data-aos="fade-up"
          data-aos-delay="200">
          <h1 className="text-6xl font-bold text-gray-200">My Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mt-10">
            <div className="p-2 rounded-2xl  bg-slate-800 flex items-center gap-2">
              <FaHtml5 size={40} color="orange" />
              <h1>Html 5</h1>
            </div>
            <div className="p-2 rounded-2xl bg-slate-800 flex items-center gap-2">
              <FaCss3 size={40} className="text-blue-500" />
              <h1>Css 3</h1>
            </div>
            <div className="p-2 rounded-2xl bg-slate-800 flex items-center gap-2">
              <FaJs size={40} className="text-yellow-300" />
              <h1 className="text-sm">JavaScript</h1>
            </div>
            <div className="p-2 rounded-2xl bg-slate-800 flex items-center gap-2">
              <FaReact size={40} className="text-teal-500" />
              <h1>React</h1>cpu
            </div>
            <div className="p-2 rounded-2xl bg-slate-800 flex items-center gap-2">
              <SiTypescript
                size={40}
                className="text-blue-500 bg-white rounded-lg"
              />
              <h1>TypeScript</h1>
            </div>
            <div className="p-2 rounded-2xl bg-slate-800 flex items-center gap-2">
              <SiTailwindcss size={40} className="text-teal-700" />
              <h1>Tailwind</h1>
            </div>
            <div className="p-2 rounded-2xl bg-slate-800 flex items-center gap-2">
              <RiNextjsFill size={40} className="text-black" />
              <h1>Next.js</h1>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
