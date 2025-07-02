import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footers from '../Pages/Footers';

const HomeLayout = () => {

    
    const [darkMode, setDarkMode] = useState(false);

  // Optional: Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
    return (
        <div>
            <div className={darkMode ? 'bg-gray-900 text-black min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
       <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="">
        <header>
                <Navbar></Navbar>
               
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footers></Footers>
            </footer>
      </div>
    </div>
    
        </div>
    );
};

export default HomeLayout;