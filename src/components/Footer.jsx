export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-xl font-bold text-white">Ilyas Project</h1>
          <p className="mt-3 text-sm">
            Front end Developer yang fokus membuat website modern, responsive,
            dan user-friendly.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-white font-semibold mb-3">Menu</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white font-semibold mb-3">Follow Me</h2>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Ilyas Syamsudin. All rights reserved.
      </div>
    </footer>
  );
}
