import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-400 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 border-t border-b rounded">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} RealEstatePro. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-teal-600 transition">About</a>
          <a href="#" className="hover:text-teal-600 transition">Contact</a>
          <a href="#" className="hover:text-teal-600 transition">Terms</a>
          <a href="#" className="hover:text-teal-600 transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
