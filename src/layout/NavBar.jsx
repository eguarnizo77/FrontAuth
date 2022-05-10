import React, { useState } from "react";
import { Link } from "react-router-dom";

import i18n from "../constants/i18n";

import { BsGlobe } from "react-icons/bs";

const NavBar = () => {  
  const [dropdownShow, setDropdownShow] = useState(true);

  const handleClickLanguague = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownShow(false);
  };

  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
      <div className="container">
        <Link
          to="/login"
          className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white"
        >
          AUTHENTICATION APP
        </Link>

        <div
          className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
          id="navigation"
        >
          <ul className="navbar-nav navbar-nav-hover mx-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                type="button"
                className="nav-item btn btn-sm"
                onClick={() => {
                  dropdownShow ? setDropdownShow(false) : setDropdownShow(true);
                }}
              >
                <BsGlobe color="white" />
              </button>
            </li>
            <div
              className={`dropdown-menu dropdown-menu-animation p-3 border-radius-xl mt-lg-5 ${
                dropdownShow ? "d-hidden" : "d-block"
              }`}
            >
              <ul className="list-group">
                <li
                  className="nav-item list-group-item border-0 p-0 leaflet-interactive"
                  onClick={() => handleClickLanguague("es")}
                >
                  <a className="dropdown-item py-2 ps-3 border-radius-md">
                    <div className="d-flex">
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center p-0">
                        Spanish
                      </h6>
                    </div>
                  </a>
                </li>
                <li
                  className="nav-item list-group-item border-0 p-0 leaflet-interactive"
                  onClick={() => handleClickLanguague("en")}
                >
                  <a className="dropdown-item py-2 ps-3 border-radius-md">
                    <div className="d-flex">
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center p-0">
                        English
                      </h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
