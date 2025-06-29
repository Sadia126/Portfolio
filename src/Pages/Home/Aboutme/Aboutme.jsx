import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaBookReader,
  FaLightbulb,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="bg-white text-gray-800 px-6 py-12 rounded-2xl shadow-lg max-w-6xl mx-auto
       my-10"
    >
      <h2 className="text-4xl font-bold text-center mb-12">👋 About Me</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Introduction */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            I’m a passionate and curious full-stack web developer who loves
            turning ideas into real-life digital experiences. My journey started
            with curiosity and grew into a dedication to build sleek, functional
            web apps.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 mt-4">
            I thrive in front-end development where creativity meets logic, but
            I also enjoy the challenges of backend logic and database design. I
            believe in writing clean, maintainable code and continuously
            learning modern technologies.
          </p>
        </div>

        {/* Right Side: Highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Block 1 */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-md flex flex-col items-center text-center">
            <FaCode className="text-3xl text-indigo-600 mb-3" />
            <h4 className="font-semibold text-lg">Coding is My Craft</h4>
            <p className="text-sm text-gray-600">
              From JavaScript to backend APIs, I build and refine digital
              experiences every day.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-md flex flex-col items-center text-center">
            <FaPaintBrush className="text-3xl text-pink-500 mb-3" />
            <h4 className="font-semibold text-lg">Creative by Nature</h4>
            <p className="text-sm text-gray-600">
              I love painting 🎨 and UI design. My creativity enhances every
              line of code.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-md flex flex-col items-center text-center">
            <FaBookReader className="text-3xl text-green-500 mb-3" />
            <h4 className="font-semibold text-lg">Lifelong Learner</h4>
            <p className="text-sm text-gray-600">
              Always exploring new tech and reading 📚 to sharpen my knowledge
              and skills.
            </p>
          </div>

          {/* Block 4 */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-md flex flex-col items-center text-center">
            <FaLightbulb className="text-3xl text-yellow-500 mb-3" />
            <h4 className="font-semibold text-lg">Passionate Builder</h4>
            <p className="text-sm text-gray-600">
              I believe technology, driven by passion, can change lives—and I
              aim to be part of that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
