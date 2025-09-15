// src/pages/LoginPage.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // State to hold form data (email, password)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to hold any error messages from the API
  const [error, setError] = useState("");

  // Hook from react-router-dom to programmatically navigate
  const navigate = useNavigate();

  // Handles changes in input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission
    setError(""); // Clear previous errors

    try {
      // Send a POST request to the backend login endpoint
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );

      // A successful login will return a 200 OK status.
      // The JWT is automatically set as a cookie by the browser.
      localStorage.setItem("token", response.data.token);
      if (response.status === 200) {
        // Redirect the user to the home page
        navigate("/");
      }
    } catch (err) {
      // Set an error message if the API call fails (e.g., wrong credentials)
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Sign in to your account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {/* Display error message if it exists */}
          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
