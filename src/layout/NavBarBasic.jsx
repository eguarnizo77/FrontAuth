import React from "react";
import { Link } from "react-router-dom";

const NavBarBasic = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
      <div className="container">
        <Link to="/login" className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white"> Authentication App </Link>        
      </div>
    </nav>
  );
}
export default NavBarBasic;
