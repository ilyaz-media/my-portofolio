import { useState, useEffect } from "react";
import { FaTimes, FaBars, FaMoon } from "react-icons/fa";
import ToggleActive from "./ToggleDark";

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav>
      <div className="flex justify-between bg-white  px-10 py-3 items-center dark:bg-black/10 dark:text-white duration-500 fixed top-0 w-full z-20">
        <div className="font-bold text-teal-500 text-xl">Ilyas Project</div>
        <div className="flex gap-10">
          <div className=" hidden  md:flex gap-6 items-center">
            <a
              href="#home"
              className=" transition-all duration-300 hover:text-teal-600">
              Home
            </a>
            <a
              href="#about"
              className=" transition-all duration-300 hover:text-teal-600">
              About
            </a>
            <a
              href="#skils"
              className=" transition-all duration-300 hover:text-teal-600">
              Skils
            </a>
            <a
              href="#project"
              className=" transition-all duration-300 hover:text-teal-600">
              Project
            </a>
            <a
              href="#contact"
              className=" transition-all duration-300 hover:text-teal-600">
              Contact
            </a>
          </div>
          <button onClick={() => setIsopen(!isOpen)} className="md:hidden ">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <button
            className=" dark:text-white-500 "
            onClick={() => setDarkMode(!darkMode)}>
            <ToggleActive />
          </button>
        </div>
      </div>

      {/* mobile mode */}
      {isOpen && (
        <div className=" z-10 fixed mt-[10%] md:hidden flex flex-col  w-full gap-2 px-10 py-5 shadow-md z-30   bg-white dark:bg-gray-800 duration-500 dark:text-white">
          <a href="#home" className="hover:text-teal-500">
            Home
          </a>
          <a href="#about" className="hover:text-teal-500">
            About
          </a>
          <a href="#skils" className="hover:text-teal-500">
            Skils
          </a>
          <a href="#project" className="hover:text-teal-500">
            Project
          </a>
          <a href="#contact" className="hover:text-teal-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
