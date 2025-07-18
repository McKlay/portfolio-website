// File Name: Navbar.jsx
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <img src="/assets/images/react-icon.png" alt="logo" className="h-8 w-8" />
          <span className="text-white font-semibold text-lg">Clay Mark Sarte</span>
        </div>

        {/* Center: Menu Links */}
        <nav className="bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 rounded-full px-6 py-2 flex flex-wrap justify-center gap-4 text-white font-medium text-sm backdrop-blur-sm shadow-md lg:transform lg:-translate-x-10">
          <Link to="/#hero" className="cursor-pointer hover:text-purple-300">
            About me
          </Link>
          <Link to="/#skills" className="cursor-pointer hover:text-purple-300">
            Skills
          </Link>
          <Link to="/#projects" className="cursor-pointer hover:text-purple-300">
            Projects
          </Link>
          <a href="https://github.com/McKlay/portfolio-website" target="_blank" rel="noreferrer" className="hover:text-purple-300">
            Source Code
          </a>
        </nav>

        {/* Right: Socials */}
        <div className="flex gap-4 text-white text-lg">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://web.facebook.com/john.mccllanne/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
