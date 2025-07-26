import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="px-4 py-4">
        <div className="flex items-center justify-between py-4 px-4 mx-auto max-w-screen-xl">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Logo
          </Link>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Links - Hidden on small, visible on md+ */}
          <ul className="hidden md:flex gap-x-4 items-center">
            {["/", "/skills", "/about", "/projects"].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-800" : "text-gray-800"
                    } font-medium`
                  }
                >
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right icons/buttons */}
          <div className="hidden md:flex items-center gap-x-3">
            <a
              href="/cv.pdf"
              download
              className="bg-indigo-500 hover:bg-indigo-600 transition-opacity duration-200 border-white shadow-2xl rounded py-2 px-2 text-white text-sm"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3">
            {["/", "/skills", "/about", "/projects"].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-800" : "text-gray-800"
                  } block font-medium`
                }
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            ))}
            <div className="flex items-center gap-x-3 pt-2">
              <a
                href="/cv.pdf"
                download
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm py-1 px-2 rounded"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
        
      </nav>
    </header>
  );
}

export default Navbar;
