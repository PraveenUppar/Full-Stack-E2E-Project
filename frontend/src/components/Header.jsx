import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/login"); // Redirect to login page
  };

  const handleLogin = () => {
    navigate("/login"); // Redirect to login page
  };

  const isLoggedIn = !!localStorage.getItem("token"); // Check if token exists

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700"
        >
          Task Manager
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
