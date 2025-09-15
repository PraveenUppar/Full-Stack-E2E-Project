import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Task Manager. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
