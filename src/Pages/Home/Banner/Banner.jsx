import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import myImage from "../../../assets/profile.jpg";

const Banner = () => {
  const downloadCV = () => {
    toast.error("CV Coming Soon!");
  };

  return (
    <div className="hero min-h-screen bg-base-100 px-2 py-10">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-16">
        <img
          src={myImage}
          className="w-64 sm:w-80 md:w-96 rounded-xl"
          alt="Umme Sadia Sayti"
        />
        <div className="text-center lg:text-left ">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Hi, I'm Umme Sadia Sayti
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            I’m a passionate web developer who blends creativity with code to
            build seamless digital experiences. Welcome to my portfolio — where
            ideas transform into impactful, user-friendly solutions. Let's
            create something remarkable together!
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
            <a
              href="https://github.com/Sadia126/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-2xl transition"
            >
              <FaGithub />
            </a>
           
          
            <a
              href="https://www.facebook.com/umme.sadia.sayti"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-2xl transition"
            >
              <FaFacebook />
            </a>
          </div>

          <button
            onClick={downloadCV}
            className="btn bg-[#c3902c] hover:bg-[#b6811c] text-white px-6 py-2 rounded-md transition"
          >
            📄 Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
