import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 mx-auto max-w-screen-xl min-h-screen px-4">
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

      {/* Skills Header */}
      <h1 className="text-2xl md:text-3xl font-semibold text-indigo-500 text-center mb-4">
        Skills
      </h1>

      {/* Skill Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 px-4 pb-10">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="w-full max-w-xs px-4 py-4 border border-white font-semibold shadow text-center rounded-lg bg-white"
          >
            <img
              className="w-full h-40 shadow-lg object-cover border border-white rounded-md mb-3"
              src="https://st2.depositphotos.com/3591429/12543/i/450/depositphotos_125438094-stock-photo-creative-graphic-icon.jpg"
              alt=""
            />
            <p className="text-gray-600 text-sm break-words">
              Building responsive web apps using React, JavaScript & Tailwind CSS.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
