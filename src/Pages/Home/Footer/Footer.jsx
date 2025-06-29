import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name & Rights */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-[#c3902c]">Umme Sadia Sayti</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Sadia126/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c3902c] transition"
          >
            <FaGithub />
          </a>
          
          <a
            href="mailto:ummesadiasayti@gmail.com"
            className="hover:text-[#c3902c] transition"
          >
            <MdOutlineMailOutline />
          </a>
        </div>

        {/* Right: Quick nav (optional) */}
        <div className="flex gap-4 text-sm">
          <a href="#aboutme" className="hover:text-[#c3902c] transition">
            About
          </a>
          <a href="#project" className="hover:text-[#c3902c] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#c3902c] transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
