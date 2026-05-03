import { FaCss3, FaFacebook, FaGithub, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaReact } from "react-icons/fa";
import img from "../img/1.png";
import Floor from "../components/FLoor";
import "../components/scene.css";
import "./about.css";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <div id="about" className="back  pt-10 bg-zinc-950 text-gray-100">
      <div className="w-[80%] mx-auto pt-10 text-center">
        <h1 className="text-blue-500">ABOUT</h1>
        <h1 className="text-4xl font-bold">About Me</h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 f">
          {/* left */}
          <div
            className="bg-zinc-900 rounded-3xl  h-full object-cover flex-1 text-start  relative shadow-lg "
            data-aos="fade-up">
            <img src={img} className="h-full rounded-3xl object-cover" alt="" />
          </div>
          {/* right */}
          <div className="flex gap-3 flex-col"  data-aos="fade-up"
                data-aos-delay="400">
            {/* top */}
              <div
                className="bg-zinc-900 rounded-2xl p-5 lg:px-20 lg:py-10  text-start flex-1 shadow-lg relative"
               >
                <div className="p-10  bg-blue-500 absolute rounded-3xl right-0 -translate-y-20 translate-x-5">
                  {" "}
                </div>
                <h1 className=" text-3xl text-start font-bold">Who am I?</h1>
                <p className="font-light mt-10 text-xs md:text-sm">
                  I’m Ilyas, a 19-year-old aspiring web development specialist
                  from Indonesia. As a self-taught front-end developer, I focus
                  on building modern, responsive interfaces using React and
                  Tailwind CSS, turning designs from Figma into clean,
                  interactive web experiences.
                </p>
                <div className="flex gap-3 mt-5 text-gray-300">
                  <FaInstagram size={40} />
                  <FaLinkedin size={40} />
                  <FaFacebook size={40} />
                  <FaGithub size={40} />
                </div>
              </div>
            {/* bottom */}
            <div className="flex-1 py-3 bg-zinc-900 rounded-3xl text-center">
              <h1 className="text-xl font-semibold">My Skills</h1>
              <div className="flex gap-5 flex-wrap mt-5 justify-center">
                <FaHtml5 className="text-orange-500" size={40}/>
                <FaCss3 className="text-blue-500" size={40}/>
                <FaJs className="text-yellow-400" size={40}/>
                <FaReact className="text-teal-500" size={40}/>
                <SiTailwindcss className="text-cyan-500" size={40}/>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="scene">
        <Floor />
      </div>
    </div>
  );
}
