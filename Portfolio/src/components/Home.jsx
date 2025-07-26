import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 mx-auto max-w-screen-xl px-4 min-h-screen">

        <img
          className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72 shadow-lg border border-white"
          src="https://media.istockphoto.com/id/1090878494/photo/close-up-portrait-of-young-smiling-handsome-man-in-blue-polo-shirt-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=AycQ2obu8sgJxWAJgYBbYR6jeRB9Bhs1JZBXzSgL6LE="
          alt="Ankit"
        />
        <div className="text-center md:text-left text-2xl md:text-4xl font-bold">
          Hi! I am Ankit
          <br />
          <span className="text-indigo-600">a Full Stack Developer</span>
          <p className="text-base md:text-xl font-normal py-2">
            I build fast and scalable web apps with modern tech
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/ankit-kumar-368a00222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-gray-800" />
            </a>
            <a
              href="https://github.com/ankitkr20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-800" />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold text-indigo-500 text-center mb-1">
        SKILLS
      </h1>
      <div className="flex justify-center">
      <div className="md:w-20 h-1 mb-2 bg-indigo-500 rounded-full"></div>
      </div>
      <p className="text-center font-semibold mb-4">A collection of my Technical skills and expertise honed through various projects and experiences</p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-4">


      {/* Card 1 */}

      <div className="bg-white p-4 rounded-lg shadow-xl w-full md:w-80 border-2 border-white">
      <p className="text-center font-bold pb-1 text-lg">FRONTEND</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center p-1 space-x-2">
            <img src="./src/logo/react.png" alt="React" className="w-6 h-6" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center p-1 space-x-2">
            <img src="./src/logo/css.png" alt="React" className="w-6 h-6" />
            <span className="text-sm font-medium">CSS</span>
          </div>
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center p-1 space-x-2">
            <img src="./src/logo/html.png" alt="HTML" className="w-6 h-6" />
            <span className="text-sm font-medium">HTML</span>
          </div>
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center p-1 space-x-2">
            <img src="./src/logo/javascript.png" alt="Javascript" className="w-6 h-6" />
            <span className="text-sm font-medium">Javascript</span>
          </div>
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center p-1 space-x-2">
            <img src="./src/logo/redux.png" alt="Redux" className="w-6 h-6" />
            <span className="text-sm font-medium">Redux</span>
          </div>
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center space-x-2">
            <img src="./src/logo/tailwind.png" alt="Tailwind" className="w-6 h-6" />
            <span className="text-sm font-medium">Tailwind</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}

      <div className="bg-white p-4 rounded-lg shadow-xl w-full md:w-80 border-2 border-white">
        <p className="text-center font-bold pb-1 text-lg">BACKEND</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center space-x-2">
          <img src="./src/logo/nodejs.png" alt="Node JS" className="w-6 h-6"/>
          <span className="text-sm font-medium">Node JS</span>
          </div>
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center space-x-2">
          <img src="./src/logo/express.png" alt="Express" className="w-6 h-6"/>
          <span className="text-sm font-medium">Express</span>
          </div>
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center space-x-2">
          <img src="./src/logo/mongodb.png" alt="MongoDB" className="w-6 h-6"/>
          <span className="text-sm font-medium">MongoDB</span>
          </div>
          <div className="rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center space-x-2">
          <img src="./src/logo/mysql.png" alt="MySQL" className="w-6 h-6"/>
          <span className="text-sm font-medium">MySQL</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}

      {/* Card 4 */}


      </div>
    </>
  );
}

export default Home;
