import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="container py-3 mx-auto flex-grow ">WHAT TO RENDER</main>
      <Footer />
    </div>
  );
}

export default Layout;
