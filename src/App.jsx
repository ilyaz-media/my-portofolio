import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import TombolWa from "./components/TombolWa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function App() {
  // state link aktive
  const [activeLink, setActiveLink] = useState("home");

  // data aos
  useEffect(() => {
    AOS.init({
      duration: 1100, // durasi animasi
      once: false, // animasi hanya sekali
    });
  }, []);

  
  

  return (
    <div className=" font-poppins bg-gray-900 duration-500">
      <Navbar active={activeLink} />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      <TombolWa />
    </div>
  );
}
