import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [firstname, setFirstname] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setFirstname(JSON.parse(user).firstname);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setFirstname("");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-purple-500">
          BMW
        </h1>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className="hover:text-yellow-500 font-medium">Home</a>
          <a href="/about" className="hover:text-yellow-500 font-medium">About</a>
          <a href="/contact" className="hover:text-yellow-500 font-medium">Contact</a>
          {firstname ? (
            <div className="flex items-center space-x-4">
              <span className="font-medium">{firstname}</span>
              <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300" >Logout
              </button>
            </div>
          ) : (
            <a href="/Signup" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Signup</a>
          )}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white hover:text-blue-400 transition duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="/" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
          {firstname ? (
            <div className="px-4 py-2">
              <span className="block">{firstname}</span>
              <button onClick={handleLogout} className="mt-2 w-full bg-yellow-500 px-4 py-2 rounded-lg hover:bg-black transition duration-300">Logout</button>
            </div>
          ) : (
            <a href="/login" className="block px-4 py-2 mt-2 bg-blue-500 text-center rounded-lg hover:bg-blue-600">Login </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
