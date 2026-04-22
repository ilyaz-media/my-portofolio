import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typing() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Programmer",
        "Front End Developer",
      
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} className=""></span>;
}
