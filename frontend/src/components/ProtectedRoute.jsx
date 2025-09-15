import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token in localStorage:", token); // Log the token

    if (token) {
      console.log("Redirecting to /home");
      navigate("/"); // Redirect to HomePage if logged in
    } else {
      console.log("Redirecting to /login");
      navigate("/login"); // Redirect to LoginPage if not logged in
    }
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
