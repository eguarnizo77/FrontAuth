import React from "react";

import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="main-content mt-0">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
