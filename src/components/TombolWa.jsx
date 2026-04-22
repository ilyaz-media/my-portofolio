import { FaWhatsapp } from "react-icons/fa";

export default function TombolWa() {
  return (
    <a
      href="https://wa.me/6282129546021?text=Halo%20saya%20ingin%20bertanya%20"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bg-green-500 p-5 z-10 bottom-[5%] right-[2%] rounded-full shadow-lg animate-floating3">
      <FaWhatsapp className="text-4xl text-white" />
    </a>
  );
}
