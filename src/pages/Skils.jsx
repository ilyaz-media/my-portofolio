import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skils() {
  return (
    <section className="px-10 py-10 mt-10 text-center text-white bg-slate-800">
      <h1 className="text-center font-bold text-3xl text-gray-400 mb-2">
        Myskills
      </h1>
      <p className="font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="mt-20 mb-10 flex justify-between md:justify-center flex-wrap gap-10">
        <div className="">
          <FaHtml5 size={60} className="text-orange-500" />
          <p>Html 5</p>
        </div>
        <div className="">
          <FaCss3 size={60} className="text-blue-500" />
          <p>Css 3</p>
        </div>
        <div className="">
          <FaJs size={60} className="text-yellow-500" />
          <p>JavaScript</p>
        </div>
        <div className="">
          <FaReact size={60} className="text-teal-500" />
          <p>React.js</p>
        </div>
        <div className="">
          <SiTailwindcss size={60} className="text-teal-500" />
          <p>Tailwind</p>
        </div>
      </div>
    </section>
  );
}
