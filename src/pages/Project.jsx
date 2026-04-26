import { h1 } from "framer-motion/client";
import CardProject from "../components/CardProject";
import imgProject1 from "../img/project/1.png";
import imgProject2 from "../img/project/2.png";
import imgProject3 from "../img/project/4.png";

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
      name: "MSME Business",
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
      className="py-20 px-2 bg-black/50  text-white text-center">
      <h1 className="text-teal-500">PORTOFOLIO</h1>
      <h1 className="text-4xl mb-2 font-bold">Projects</h1>
      <p className="font-light">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui enim illum
        delectus?
      </p>

      <div className="grid grid-cols-1 gap-10 mt-10  w-[80%] m-[auto] ">
        {projects.map((item) => {
          return (
            <div
              className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg "
              data-aos="fade-up">
              <div className=" p-5 bg-slate-800 ">
                <img
                  src={item.img}
                  alt=""
                  className="w-full rounded-2xl shadow-md object-cover"
                />
              </div>
              <div className="flex flex-col justify-center bg-slate-900 text-start p-10">
                <h1 className="text-2xl font-semibold">{item.name}</h1>
                <p>{item.ket}</p>
                <div className="flex gap-3 py-10 flex-wrap items-center text-sm">
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
