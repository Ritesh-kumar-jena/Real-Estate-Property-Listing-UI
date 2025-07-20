import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";


function Navbar() {
    const {theme,setTheme}=useContext(ThemeContext)
    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }
  return (
    <>
     <nav className="bg-purple-300 dark:bg-gray-900 shadow-md text-black dark:text-white top-0 z-50 sticky rounded">
        
         <div className="relative max-w-7xl mx-auto px-4 py-3 xs:grid xs:grid-cols-2 sm:flex justify-around items-center 
  before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:bg-gray-500 
  sm:before:hidden">
              <h1 className="text-xl font-bold items-center">
               <Link to="/">🏠 Real Estate 🏬</Link> 
            </h1>

                  <Link to="/" className="hover:underline md:font-semibold bg-teal-400 p-2 sm:p-3 md:py-4 md:px-5  rounded-md text-center inline-block w-full sm:w-auto">
                   Home
                  </Link>

                  <Link to="/favorites" className="hover:underline md:font-semibold bg-teal-400 p-1 sm:p-3 md:p-4 rounded-md text-center inline-block w-full sm:w-auto">
                   Favorites
                  </Link>
             
              
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 mt-3 md:mt-0 sm:flex justify-end "
                >
                  {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
                </button>
              
            </div>
     </nav>
    </>
  );
}

export default Navbar;

