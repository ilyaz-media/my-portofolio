import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .send("service_dqej2t8", "template_88iwy53", form, "w4Ez31GXKCPYcJ0Xj")
      .then(() => {
        alert("☑️ pesan berhasil di kirim");
        setForm({
          email: "",
          message: "",
        });
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen p-3 lg:p-10 flex flex-col lg:flex-row  bg-gray-900 text-white  items-center justify-center pt-20 ">
    
      

      {/* form */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2   rounded-3xl">
        <div className="bg-slate-800/50 p-10 flex flex-col gap-5 rounded-3xl ">
          <h1 className="text-4xl font-bold text-teal-500">Contact me </h1>
          <p>A Front-End Developer focused on building modern, responsive, and user-friendly websites.</p>
          <div className="flex flex-col gap-2">
            <div className=" px-5 py-2 flex gap-4 items-center rounded-lg">
              <FaLinkedin size={40}/>
              <p>ilyas93@linkedin.com</p>
            </div>
            <div className=" px-5 py-2 flex gap-4 items-center rounded-lg">
              <FaInstagram size={40}/>
              <p>demonkite_93</p>
            </div>
            <div className=" px-5 py-2 flex gap-4 items-center rounded-lg">
              <FaFacebook size={40}/>
              <p>demonkite</p>
            </div>
          

          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" p-5 rounded-r-2xl w-full   ">
          <h2 className="text-2xl font-bold mb-6 text-start text-teal-500">Get In Touch</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan email kamu"
              className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 "
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Pesan</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan kamu..."
              rows="4"
              className="w-full p-3  border border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700"
              required></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
