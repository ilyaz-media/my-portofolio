import { FaCode, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import img from "../img/1.png";
import { BiSend } from "react-icons/bi";
import { SiNestjs, SiTailwindcss,SiTypescript,SiVitess,SiVitest } from "react-icons/si";
import Typing from "../data/Typed";
import { RiNextjsFill } from "react-icons/ri";

export default function Home() {
  return (
    <section id="home" className=" scroll-mt-5 min-h-screen  bg-black/50 pt-20 text-white">
      <div className="w-[90%] mx-[auto] grid gap-5 lg:grid md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[500px] relative">
        <div className="hidden  absolute bg-gradient-to-br from-teal-50 to-green-100 dark:bg-gradient-to-br dark:from-teal-900 dark:to-blue-900 blur-3xl p-60  z-9 left-0 top-0 h-full"></div>
        <div className="mih-h-[500px] px-2 flex flex-col gap-4 justify-center z-10 ">
          <div className=" ">
            <h1 className="text-6xl  font-light text-gray-200">
              I am
            </h1>
            <h1 className="text-6xl lg:text-8xl font-bold  dark:text-gray-100 ">
              Ilyas samsudin
            </h1>
            <h1 className="text-3xl text-teal-500">
              <Typing />
            </h1>
          </div>
          <p>
            I am a self-taught beginner front-end developer focused on building
            modern, responsive, and user-friendly websites using React and
            Tailwind CSS, transforming designs from Figma into interactive web
            interfaces.
          </p>
          <div className="mt-2 flex gap-2">
            <a href="#contact" className="px-5 py-2 rounded-2xl bg-teal-600 text-white shadow-lg">
              Contact Me
            </a>
            <a href="#project" className="px-5 py-2 rounded-2xl border border-teal-500 text-teal-500 shadow-lg">
              View Project
            </a>
          </div>
        </div>
        <div
          className=" rounded-3xl relative mx-2"
          data-aos="fade-up">
            <div className="bg-gradient-to-b from-teal-500 to-blue-500  h-[500px] rounded-full blur-3xl z-[9] ">
            </div>
          <img src={img} alt="" className=" absolute h-full object-cover  w-full top-0 z-[10] " />
          <div className="p-5 bg-gray-800 w-full absolute z-10 rounded-full flex justify-center gap-10 items-center text-teal-500">
            <BiSend/> <span>Ilyassamsudin@gmail.com</span>
          </div>
        </div>
        <div
          className="p-5 mt-20 md:p-10 bg-gradient-to-b from-slate-800 to-black rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="200">
          <h1 className="text-6xl font-bold text-gray-200">
            My Skills
          </h1>
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
              <h1>React</h1>
            </div>
            <div className="p-2 rounded-2xl bg-slate-800 flex items-center gap-2">
              <SiTypescript size={40} className="text-blue-500 bg-white rounded-lg" />
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
        </div>
      </div>
    </section>
  );
}
