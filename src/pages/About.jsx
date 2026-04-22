import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import img from '../img/1.png'

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50 dark:text-gray-100">
      <div className="w-[80%] mx-auto py-10 text-center">
        <h1 className="text-teal-500">ABOUT</h1>
        <h1 className="text-4xl font-bold">About Me</h1>

        <div className="mt-10 flex gap-5 flex-col lg:flex-row">

          <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl  h-full object-cover flex-1 text-start  relative shadow-lg " data-aos='fade-up'>
            <img src={img} className='h-full rounded-3xl' alt="" />
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 md:p-20 text-start flex-1 shadow-lg relative" data-aos='fade-up'data-aos-delay='400'>
             <div className='p-10 bg-teal-500 absolute rounded-3xl right-0 -translate-y-20 translate-x-5'> </div>
               <h1 className=" text-3xl text-start font-bold">
              Lorem ipsum, dolor sit amet consectetur
            </h1>
            <p className="font-light mt-10">
              I’m Ilyas, a 19-year-old aspiring web development specialist from Indonesia. As a self-taught front-end developer, I focus on building modern, responsive interfaces using React and Tailwind CSS, turning designs from Figma into clean, interactive web experiences.
            </p>
            <div className='flex gap-3 mt-5 text-gray-600 dark:text-gray-300'>
              <FaInstagram size={40}/>
              <FaLinkedin size={40}/>
              <FaFacebook size={40}/>
              <FaGithub size={40}/>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
