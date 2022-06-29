import React, { useContext, useEffect } from "react";

import AuthContext from "../context/Auth";

import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

import "../styles/layout.css";

const Layout = ({ children }) => {
  const { isLogged, logout } = useContext(AuthContext);  

  useEffect(() => {
    if (isLogged) {      
      logout();        
    }  
  }, [isLogged]);
  
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
