import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Tilt from "./Tilt.jsx";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      <div className="fullscreen-gradient min-h-screen">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 mx-auto max-w-screen-xl px-4 py-60">
          {/* Tilt Effect is 3D-Animation which will tilt the image when we hover on it. */}

          <Tilt>
            <img
              className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72 border-4 border-white shadow-lg hover:shadow-indigo-500 transition-shadow duration-500 hover:scale-105 transform"
              src="https://media.istockphoto.com/id/1090878494/photo/close-up-portrait-of-young-smiling-handsome-man-in-blue-polo-shirt-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=AycQ2obu8sgJxWAJgYBbYR6jeRB9Bhs1JZBXzSgL6LE="
              alt="Ankit"
            />
          </Tilt>
          <div className="text-center md:text-left text-2xl md:text-4xl font-bold">
            Hi! I am Ankit
            <br />
            {/* Adding Typwriter animation */}
            <span className="text-indigo-600 ">
              <Typewriter
                words={["a Full Stack Devloper", "a Graphich Designer"]}
                loop
                typeSpeed={70}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </span>
            <p className="text-base md:text-xl font-normal py-2">
              I build fast and scalable web apps with modern tech
            </p>
            {/* Adding Linkedin, Github icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <div className="animate-pulse ">
                <a
                  href="https://www.linkedin.com/in/ankit-kumar-368a00222/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl  text-gray-800" />
                </a>
              </div>
              <div className="animate-pulse rounded">
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
        </div>

        {/* Skills Section */}

        <h1 className="text-2xl md:text-2xl font-semibold text-indigo-600 text-center mb-6">
          SKILLS
        </h1>
        <div className="flex justify-center">
          {/* <div className="md:w-15 h-1 mb-2 bg-indigo-500 rounded-full"></div> */}
        </div>
        <p className="text-center font-semibold mb-4">
          A collection of my Technical skills and expertise honed through
          various projects and experiences
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-30 p-4">
          {/* Card 1 */}
          <Tilt>
            <div className="bg-white p-4 rounded-lg shadow-xl w-full md:w-80 border-2 border-white hover:shadow-indigo-400 transition-shadow duration-300">
              <p className="text-center font-bold pb-1 text-lg">FRONTEND</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "./src/logo/react.png", label: "React" },
                  { src: "./src/logo/css.png", label: "CSS" },
                  { src: "./src/logo/html.png", label: "HTML" },
                  { src: "./src/logo/javascript.png", label: "Javascript" },
                  { src: "./src/logo/redux.png", label: "Redux" },
                  { src: "./src/logo/tailwind.png", label: "Tailwind" },
                ].map(({ src, label }) => (
                  <div
                    key={label}
                    className="transition-transform duration-300 hover:scale-110 cursor-pointer rounded-xl border-2 border-indigo-200 shadow-2xl flex items-center p-1 space-x-2"
                  >
                    <img src={src} alt={label} className="w-6 h-6" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>

          {/* Card 2 */}
          <Tilt>
            <div className="bg-white p-4 rounded-lg shadow-xl w-full md:w-80 border-2 border-white hover:shadow-indigo-400 transition-shadow duration-300">
              <p className="text-center font-bold pb-1 text-lg">BACKEND</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "./src/logo/nodejs.png", label: "Node JS" },
                  { src: "./src/logo/express.png", label: "Express JS" },
                  { src: "./src/logo/mongodb.png", label: "Mongo DB" },
                  { src: "./src/logo/mysql.png", label: "My SQL" },
                ].map(({ src, label }) => (
                  <div
                    key={label}
                    className="transition-transform duration-300 hover:scale-110 rounded-xl border-2 border-indigo-200 shadow-2xl flex p-1 items-center space-x-2"
                  >
                    <img src={src} alt={label} className="w-6 h-6" />
                    <span className="font-medium text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-30 p-4">
          <Tilt>
            <div className="bg-white p-4 rounded-lg shadow-xl w-full md:w-80 border-2 border-white hover:shadow-indigo-400 transition-shadow duration-300">
              <p className="text-center font-bold pb-1 text-lg">TOOLS</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "./src/logo/vscode.png", label: "VS Code" },
                  { src: "./src/logo/git.png", label: "Git" },
                  { src: "./src/logo/github.png", label: "GitHub" },
                  { src: "./src/logo/mysql.png", label: "MySQL" },
                ].map(({ src, label }) => (
                  <div
                    key={label}
                    className="transition-transform duration-300 hover:scale-110 rounded-xl border-2 border-indigo-200 shadow-2xl flex p-1 items-center space-x-2"
                  >
                    <img src={src} alt={label} className="w-6 h-6" />
                    <span className="text-sm font-medium ">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
          {/* Card 4 */}
          <Tilt>
            <div className="bg-white p-4 rounded-lg shadow-xl w-full md:w-80 border-2 border-white hover:shadow-indigo-400 transition-shadow duration-300">
              <p className="text-center font-bold pb-1 text-lg">LANGUAGES</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "./src/logo/c++.png", label: "C++" },
                  { src: "./src/logo/java.png", label: "Java" },
                  { src: "./src/logo/python.png", label: "Python" },
                  { src: "./src/logo/javascript.png", label: "JavaScript" },
                ].map(({ src, label }) => (
                  <div
                    key={label}
                    className="transition-transform duration-300 hover:scale-110 rounded-xl border-2 border-indigo-200 shadow-2xl flex p-1 items-center space-x-2"
                  >
                    <img src={src} alt={label} className="w-6 h-6" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        </div>

        {/* Projects Section */}

        <h1 className="text-2xl text-indigo-600 text-center mt-6 mb-6 font-semibold">
          PROJECTS
        </h1>
        <div className="flex justify-center pt-1">
          {/* <div className="bg-indigo-600 md:w-25 h-1 rounded-lg"></div> */}
        </div>

        {/* About Section */}

        <h1 className="text-2xl text-indigo-600 text-center mt-4 mb-6 font-semibold">
          ABOUT
        </h1>
        <div className="flex justify-center mt-1 mb-8">
          {/* <div className="bg-indigo-600 md:w-15 h-1 rounded-lg"></div> */}
        </div>
        <div className="flex md:flex-row justify-center gap-8 md:gap-20">
          <img
            className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72 border-4 border-white shadow-lg"
            src="https://media.istockphoto.com/id/1090878494/photo/close-up-portrait-of-young-smiling-handsome-man-in-blue-polo-shirt-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=AycQ2obu8sgJxWAJgYBbYR6jeRB9Bhs1JZBXzSgL6LE="
            alt="Ankit"
          />
          <div style={{fontFamily: 'Raleway, sans-serif'}} className="flex text-center w-full md:w-100">
            <p className="text-lg font-medium">
              Hi! I'm Ankit, a passionate Full Stack Developer who loves
              building modern, responsive, and scalable web applications. I
              enjoy turning complex problems into clean, efficient code and
              beautiful user experiences. With a strong foundation in
              JavaScript, React, Node.js, and MongoDB, I focus on creating
              applications that not only work but also feel great to use. I'm
              constantly learning new technologies to keep up with the
              fast-moving web world. When I'm not coding, I enjoy exploring new
              tools, writing technical blogs, or contributing to open-source
              projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
