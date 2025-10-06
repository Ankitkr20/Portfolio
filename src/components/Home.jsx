import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Tilt from "./Tilt.jsx";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation()

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  useEffect(()=>{
    if(location.hash){
       const section = document.querySelector(location.hash)
       if(section){
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        setTimeout(()=>{
          window.scrollTo({top:y, behavior:"smooth"})
        },100)
       }
    }
    else{
      window.scrollTo({top:0,behavior:"smooth"})
    }
  },[location])
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
              <div >
                <a
                  href="https://www.linkedin.com/in/ankit-kumar-368a00222/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl  text-gray-800" />
                </a>
              </div>
              <div className="rounded">
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
        <section id="skills"></section>
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
              <p className="text-center font-bold pb-1 text-lg">WEB DEVELOPMENT</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "./src/logo/react.png", label: "React" },
                  { src: "./src/logo/css.png", label: "CSS" },
                  { src: "./src/logo/html.png", label: "HTML" },
                  { src: "./src/logo/javascript.png", label: "Javascript" },
                  { src: "./src/logo/redux.png", label: "Redux" },
                  { src: "./src/logo/tailwind.png", label: "Tailwind" },
                  { src: "./src/logo/nodejs.png", label: "Node JS" },
                  { src: "./src/logo/express.png", label: "Express JS" },
                  { src: "./src/logo/mongodb.png", label: "Mongo DB" },
                  { src: "./src/logo/Next.js.png", label: "Next Js" },
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
              <p className="text-center font-bold pb-1 text-lg">DATA SCIENCE</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "./src/logo/Pandas.png", label: "Pandas" },
                  { src: "./src/logo/NumPy.png", label: "NumPy" },
                  { src: "./src/logo/Matplotlib.png", label: "Matplotlib" },
                  { src: "./src/logo/Seaborn.png", label: "Seaborn" },
                  { src: "./src/logo/Jupyter.png", label: "Jupyter Notebook" },
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
              <p className="text-center font-bold pb-1 text-lg">MACHINE LEARNING</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "./src/logo/TensorFlow.png", label: "Tensorflow" },
                  { src: "./src/logo/scikit-learn.png", label: "Scikit-Learn " },
                  { src: "./src/logo/Keras.png", label: "Keras" },
                  { label: "CNN" },
                  { src: "./src/logo/Kaggle.png", label: "Kaggle" },
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
                  { src: "./src/logo/SQL.png", label: "SQL" },
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

          {/* Card 5 */}
          <Tilt>
            <div className="bg-white p-4 rounded-lg shadow-xl w-full md:w-80 border-2 border-white hover:shadow-indigo-400 transition-shadow duration-300">
              <p className="text-center font-bold pb-1 text-lg">TOOLS</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "./src/logo/Zod.png", label: "Zod" },
                  { src: "./src/logo/git.png", label: "Git" },
                  { src: "./src/logo/github.png", label: "GitHub" },
                  { src: "./src/logo/Docker.png", label: "Docker" },
                  { src: "./src/logo/Postman.png", label: "Postman" },
                  { src: "./src/logo/Jupyter.png", label: "Jupyter Notebook" },
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

        {/* Education Section */}
        <section id="education"></section>
        <h1 className="text-2xl text-indigo-600 text-center mt-6 mb-6 font-semibold">
          EDUCATION
        </h1>

        {/* Projects Section */}
        <section id="projects"></section>
        <h1 className="text-2xl text-indigo-600 text-center mt-6 mb-6 font-semibold">
          PROJECTS
        </h1>
        <div className="flex justify-center pt-1">
          {/* <div className="bg-indigo-600 md:w-25 h-1 rounded-lg"></div> */}
        </div>

        {/* About Section */}
        <section id="about"></section>
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
          <div style={{fontFamily: 'Raleway, sans-serif'}} className="flex text-center w-full md:w-100 pb-5">
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
