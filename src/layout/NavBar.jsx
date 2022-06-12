import React, { useState, useContext, useEffect } from "react";

import { Link, useNavigate, useLocation  } from "react-router-dom";

import AuthContext from "../context/Auth";
import UserContext from "../context/User";

import i18n from "../constants/i18n";

import { BsGlobe } from "react-icons/bs";

import imgSpanish from "../assets/img/spanish.png";
import imgEnglish from "../assets/img/english.png";
import imgLogout from "../assets/img/logout.png";

const NavBar = ({userData}) => {
  const { isLogged, logout } = useContext(AuthContext);
  const { imageProfile } = useContext(UserContext);  
  
  const navigate = useNavigate();
  const location = useLocation();

  const [showLanguages, setShowLanguages] = useState(false);  
  const [showLogout, setShowLogout] = useState(false);


  useEffect(() => {
    if (isLogged === false && location.pathname != "/signup") navigate("/login");          
  }, [isLogged]);

  const handleClickLanguague = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguages(false);
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
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <div className="row">
              <div className="col-auto m-auto">
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <a
                    className="px-4 cursor-pointer"
                    onClick={() => {
                      if (showLanguages) {
                        setShowLanguages(false);
                      } else {
                        setShowLanguages(true);
                        setShowLogout(false);
                      }
                    }}
                  >
                    <BsGlobe color="white" size={25} />
                  </a>
                  <ul
                    className={`dropdown-menu border-radius-xl mt-lg-2 ${
                      showLanguages ? "show" : "d-none"
                    }`}
                  >
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        onClick={() => handleClickLanguague("es")}
                      >
                        <div className="d-flex py-1">
                          <img
                            src={imgSpanish}
                            className="avatar avatar-sm me-3 my-auto"
                          />
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Spanish
                            </h6>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        onClick={() => handleClickLanguague("en")}
                      >
                        <div className="d-flex py-1">
                          <img
                            src={imgEnglish}
                            className="avatar avatar-sm me-3 my-auto"
                          />
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              English
                            </h6>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
              {isLogged ? (
                <div className="col-auto m-auto">
                  <li className="nav-item dropdown pe-2 d-flex align-items-center">
                    <a
                      className="cursor-pointer"
                      onClick={() => {
                        if (showLogout) {
                          setShowLogout(false);
                        } else {
                          setShowLogout(true);
                          setShowLanguages(false);
                        }
                      }}
                    >
                      <img
                        alt="Image"
                        src={imageProfile.path}
                        className="avatar avatar-sm border-radius-lg shadow-sm"
                      />
                    </a>
                    <div className="ms-3 mt-3">
                      <p className="text-sm mb-0 text-white"> {userData.username}</p>
                    </div>
                    <ul
                      className={`dropdown-menu border-radius-xl mt-lg-2 ${
                        showLogout ? "show" : "d-none"
                      }`}
                    >
                      <li>
                        <a
                          className="dropdown-item border-radius-md"
                          onClick={() => logout()}
                        >
                          <div className="d-flex py-1">
                            <img
                              src={imgLogout}
                              className="avatar avatar-sm me-3 my-auto"
                            />
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                Logout
                              </h6>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
              ) : (
                ""
              )}
              <div className="col-auto"></div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
