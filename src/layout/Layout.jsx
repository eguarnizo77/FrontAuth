import React from "react";

import NavBarBasic from "./NavBarBasic";
import Header from "./Header";
import Footer from "./Footer";

import "../styles/layout.css";

const Layout = ({children}) => {    
  return (
    <>
        <NavBarBasic/>
        <div className="main-content mt-0">
            <Header/>
            {children}
        </div>
        <Footer />
    </>
  )
}
export default Layout;
