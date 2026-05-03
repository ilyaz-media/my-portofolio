import { h1 } from "framer-motion/client";
import CardProject from "../components/CardProject";
import imgProject1 from "../img/project/1.png";
import imgProject2 from "../img/project/2.png";
import imgProject3 from "../img/project/4.png";
import './project.css'

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "MSME Business",
      img: imgProject1,
      ket: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui enim illudelectus",
      tech: ["react", "tailwind.css", "framer-motion"],
    },
    {
      id: 2,
      name: "Landing page",
      img: imgProject3,
      ket: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui enim illudelectus",
      tech: ["react", "tailwind.css", "framer-motion"],
    },
    {
      id: 3,
      name: "Portofolio Website",
      img: imgProject2,
      ket: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui enim illudelectus",
      tech: ["react", "tailwind.css", "framer-motion"],
    },
  ];
  return (
    <section
      id="project"
      className="background py-20 px-2 bg-zinc-950  text-white text-center">
      <h1 className="text-blue-500">PORTOFOLIO</h1>
      <h1 className="text-4xl mb-2 font-bold">Projects</h1>
      <p className="font-light text-sm w-[80%] mx-[auto]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui enim illum
        delectus?
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10  w-[80%] m-[auto] ">
        {projects.map((item) => {
          return (
            <div
              className=" rounded-2xl overflow-hidden shadow-lg "
              >
              <div className="  bg-zinc-800 p-2  ">
                <img
                  src={item.img}
                  alt=""
                  className="w-full rounded-xl shadow-lg object-contain "
                />
              </div>
              <div className="flex flex-col justify-center bg-zinc-900 text-start p-5">
                <h1 className="text-2xl font-semibold">{item.name}</h1>
                <p className="text-xs md:text-sm mt-2">{item.ket}</p>
                <div className="flex gap-3 py-5 flex-wrap items-center text-sm">
                  {item.tech.map((i) => {
                    return (
                      <div className="px-2 rounded-lg py-1 bg-gray-800 text-white  flex ">
                        {i}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
