import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    // { name: "Top", path: "/" },
    { name: "Skills", path: "/#skills" },
    { name: "Education", path: "/#education"},
    { name: "Projects", path: "/#projects" },
    { name: "About", path: "/#about" },
  ];

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="px-4 py-2">
        <div className="flex items-center justify-between py-4 px-4 mx-auto max-w-screen-xl">
          <Link to="/" className="text-xl font-bold text-gray-800">
            <span className="text-indigo-500">{`<Ankit/>`}</span>
          </Link>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-6 items-center">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  className="text-gray-800 hover:text-indigo-500 transition-colors"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* CV button */}
          <div className="hidden md:flex items-center gap-x-3">
            <a
              href="/cv.pdf"
              download
              className="bg-indigo-500 hover:bg-indigo-600 transition duration-200 shadow rounded py-2 px-3 text-white text-sm"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3">
            {navItems.map(({ name, path }) => (
              <a
                key={name}
                href={path}
                onClick={() => setIsOpen(false)}
                className="block font-medium text-gray-800 hover:text-indigo-500"
              >
                {name}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              className="block bg-indigo-500 text-white text-sm py-2 px-3 rounded text-center"
            >
              Download CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
