import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700"
        >
          Task Manager
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
