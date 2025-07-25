import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-10">
      <p>© 2025 Ankit Kumar. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
        <a href="mailto:yourmail@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer