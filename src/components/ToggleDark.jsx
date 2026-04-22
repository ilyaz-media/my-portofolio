import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleActive() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <p className="text-xs font-light"></p>
      <button
        onClick={() => setActive(!active)}
        className={`h-[30px] font-sm w-20 flex items-center rounded-full p-1 transition-all duration-300
      ${active ? "bg-teal-500" : "bg-gray-300"} relative`}>
        {/* Bulatan */}
        <div
          className={`w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold
        transform transition-all duration-300 absolute
        ${active ? "translate-x-10" : "translate-x-0"}`}>
          <p className="text-gray-700">{active ? <FaMoon /> : <FaSun />}</p>
        </div>
      </button>
    </div>
  );
}
